const router = require("express").Router();

const category = require("../models/categoryScema");
// add category

router.post("/add-category", async (req, res) => {
  try {
    const { categoryName } = req.body;
    const createdCategory = await category.create({
      categoryName: categoryName,
    });
    res.status(201).json({ message: "category created successfully" });
  } catch (error) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
