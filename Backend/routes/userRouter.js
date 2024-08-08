const router = require("express").Router();
const { response } = require("express");
const User = require("../models/userScema");
const {
  hashedpassWord,
  isPasswordMatched,
  getLoginToken,
} = require("../utils/helper");
const authMiddleware = require("../middleware/authMiddleware")
//signup

router.post("/signup", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!email || !userName || !password) {
      res.status(400).json({ message: "All fields are required" });
    }
    if (userName.length < 5) {
      res.status(400).json({ message: "username must have 5 charecters" });
    }
    if (password.length < 6) {
      res.status(400).json({ message: "password must have 6 charecters" });
    }

    const emailExist = await User.findOne({ email: email });
    const userExist = await User.findOne({ userName: userName });
    if (emailExist || userExist) {
      res.status(400).json({ message: "user already exist" });
    }
    const encryptPassword = await hashedpassWord(password);
    console.log(encryptPassword, "encryptPassword>>>>>>>>>>>");
    const userCreated = await User.create({
      email: email,
      userName: userName,
      password: encryptPassword,
    });
    return res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err, "err");
    res.status(400).json({ err: err });
  }
});

//sign-in route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }

    const emailExist = await User.findOne({ email: email });
    if (!emailExist) {
      res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await isPasswordMatched(password, emailExist?.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
    }
    console.log(emailExist, "exist>>>>>>>>>>");
    //create token
    const loginToken = await getLoginToken(emailExist?._id, emailExist?.email);
    console.log(loginToken, "loginToken>>>>>>>>>>");
    res.cookie("podcastUserToken", loginToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 100, //30 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });
    return res.status(200).json({ message: "login successfull" });
  } catch (err) {
    console.log(err, "err");
    res.status(400).json({ err: err });
  }
});


//logout

router.post("/logout",async(req,res)=>{
  res.clearCookie("podcastUserToken",{
    httpOnly:true
  });
  res.status(200).json({message:"Logout Successfull"})
})

//check cookie

router.get("/check-cookie",async ()=>{
   const token = await req.cookies.podcastUserToken;
   if(token){
     res.status(200).json({ message:true });
   }
   else{
      res.json({ message: "Logout" });
   }
})


//get user API


router.get("/getUser", authMiddleware, async(req,res)=>{
  try {
    const {email} = req.user
    const existingUser = await User.findOne({email:email})
    return res.status(200).json({ user:existingUser });
  } catch (error) {
    console.log(err, "err");
    res.status(400).json({ err: err });
  }
});

module.exports = router;
