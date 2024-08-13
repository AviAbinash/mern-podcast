const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const category = require("../models/categoryScema");
const podcast = require("../models/podcast");
const User = require("../models/userScema");

// add podcast
router.post("add-podcast", authMiddleware, async (req, res) => {
  try {
    const { title, description, categoryName } = req.body;
    const frontImage = req.file["frontImage"][0].path;
    const audioFile = req.file["frontImage"][0].path;
    if (!title || !description || !category || frontImage || audioFile) {
      res.status(400).json({ message: "All Fields are Required" });
    }

    const { user } = req;
    const cat = await category.findone({ categoryName: categoryName });
    if (!cat) {
      res.status(400).json({ message: "All Fields are Required" });
    }

    const catId = cat._id;
    const userId = user._id;

    const newPodcast = await podcast.create({
      title,
      description,
      category: catId,
      frontImage,
      audioFile,
      user: userId,
    });
    const updateCategory = category.findByIdAndUpdate(catId, {
      $push: { podcasts: newPodcast?._id },
    });
    const updateUser = User.findByIdAndUpdate(userId, {
      $push: { podcasts: newPodcast?._id },
    });
    res.status(201).json({ message: "podcast added succesfully" });
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: "something went wrong" });
  }
});

//get All podcast

router.get("/get-podcast", async (req, res) => {
  try {
    const allPodcast = await podcast
      .find()
      .populate("category")
      .sort({ createdAt: -1 });
    res.status(200).json({ message: allPodcast });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "something went wrong" });
  }
});

// get-user-podcast

router.get("/get-user-podcast", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    const userId = user._id;
    const userData = await User.findById({ _id: userId })
      .populate({ path: "podcats" }, { path: "category" })
      .select("-password");
    let userPodcast = [];
    if (userData && userData?.podcast) {
      userPodcast = userData?.podcast.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).json({ message: userPodcast });
    }
  } catch (error) {
    console.log(error, "error");
  }
});

//podcast-by-id

router.get("/podcast/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const podcasts = await podcast.findById({ _id: id }).populate("category");
    res.status(200).json({ message: podcasts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "something went wrong" });
  }
});

//podcast-by-category

router.get("/category/:cat", async (req, res) => {
  try {
    const { category } = req.params;
    const categories = await category
      .find({ categoryName: category })
      .populate({ path: "category" }, populate({ path: "category" }));

      let podcasts =[]

       categories.forEach((category)=>{
         podcasts = [...podcasts,...category.podcasts];
      })
    res.status(200).json({ message: podcasts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;
