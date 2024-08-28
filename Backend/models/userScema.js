const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { type: String, required: true, uniqure: true },
  email: { type: String, required: true, uniqure: true },
  password: { type: String, required: true, uniqure: true },
  podcasts: [{ type: mongoose.Types.ObjectId, ref: "podcasts" }],
},{timestamps:true});


module.exports = mongoose.model("userScemas",user)