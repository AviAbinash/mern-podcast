const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, uniqure: true },
    podcasts :[{ type: mongoose.Types.ObjectId, ref: "podcasts"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("categoryScema", category);