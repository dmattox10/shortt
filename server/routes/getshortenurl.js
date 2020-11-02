const express = require("express");
const Url = require("../models/url");

var getShortenUrlRoute = express.Router();
getShortenUrlRoute.get('/:shortUrl', async (req, res) => {
    var shortUrlCode = req.params.shortUrl;
    var url = await Url.findOne({ urlCode: shortUrlCode });

    try {
        if (url) {
            var clickCount = url.clickCount;
            clickCount++;
            await url.update({ clickCount });
            return res.redirect(url.longUrl);
        } else {
            return res.status(400).json("The short URL doesn't exists in our system.");
        }
    }
    catch (err) {
        console.error("Error while retrieving long URL for shorturlcode " + shortUrlCode);
        return res.status(500).json("There is some internal error.");
    }
})

module.exports = getShortenUrlRoute;