const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    title: String,
    shortUrl: String,
    clickCount: Number,
    private: Boolean
});

module.exports = mongoose.model("url", urlSchema);