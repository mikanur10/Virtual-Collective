const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  favorite: { type: Boolean, required: true },
});

module.exports = mongoose.model("events", Event);
