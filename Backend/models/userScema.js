const mongoose = require("mongoose");

const user = new mongoose.Schema({
  userName: { type: String, required: true, uniqure: true },
  email: { type: String, required: true, uniqure: true },
  password: { type: String, required: true, uniqure: true },
  podcasts: [{ type: mongoose.Types.ObjectId, ref: "podcasts" }],
},{timestamps:true});


Module.exports = mongoose.model("userScemas",user)