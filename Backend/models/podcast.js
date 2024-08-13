const mongoose = require("mongoose");

const podcasts = new mongoose.Schema(
  {
    frontImage: { type: String, required: true, uniqure: true },
    audioFile: { type: String, required: true, uniqure: true },
    title: { type: String, required: true, uniqure: true },
    descripation: { type: String, required: true, uniqure: true },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    category: { type: mongoose.Types.ObjectId, ref: "category" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("podcastScema", podcasts);
