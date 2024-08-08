const router = require("express");
const user = require("../models/userScema");
const hashedpassWord = require("../utils/helper");
//signup

router.post("/signup", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (email || userName || password) {
      res.status(400).json({ message: "All fields are required" });
    }
    if (userName.length < 5) {
      res.status(400).json({ message: "username must have 5 charecters" });
    }
    if (password.length < 6) {
      res.status(400).json({ message: "password must have 6 charecters" });
    }

    const emailExist = await user.findOne({ email: email });
    const userExist = await user.findOne({ userName: userName });
    if (emailExist || userExist) {
      res.status(400).json({ message: "user already exist" });
    }
    const encryptPassword = await hashedpassWord(password);
    console.log(encryptPassword, "encryptPassword>>>>>>>>>>>");
    const userCreated = await user.createOne({
      email: email,
      userName: userName,
      password: encryptPassword,
    });
    return res.status(201).json({message:"user created successfully"})
  } catch (err) {
    console.log(err, "err");
    res.status(400).json({ err });
  }
});

Module.exports = router;
