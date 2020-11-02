const express = require("express");
const nanoid = require("nanoid");
const validUrl = require("valid-url");
const config = require("config");
const Url = require("../models/url");

var shortUrlRoute = express.Router();

shortUrlRoute.post("/", async (req, res)=>{
    const longUrl = req.body.longUrl; // The URL the user wants to shorten
    const baseUrl = config.get("baseURL"); // Our server
    const urlSuffix = req.body.urlSuffix // The code the user wants to change it to
    const urlCode = nanoid(10); // An alternative code the user could use if theirs isn't available

    if(validUrl.isUri(longUrl)){

        try{
            var url = await Url.findOne({longUrl : longUrl});
            if(url){
                return  res.status(200).json(url); // If we get back a string that already exists, the frontend should tell the user
            }else{

                var suffixed = await Url.findOne({urlCode: urlSuffix})
                if (suffixed){
                    return res.status(200).json(suffixed, urlCode) // If someone else used this suffix in a URL, suggest the short code
                }
                else {
                    // const shortUrl = baseUrl + "/" + urlCode;
                    const shortUrl = `${baseUrl}/${urlSuffix}`
                    url  = new Url({
                        longUrl,
                        shortUrl,
                        urlCode: urlSuffix,
                        clickCount: 0
                    });

                    await url.save()
                    return res.status(201).json(url);
                }
            }
        }catch(err){
            console.error(err.message);
            return res.status(500).json("Internal Server error " + err.message);
        }
    }else{
        res.status(400).json("Invalid URL. Please enter a valid url for shortening."); // Present this to the user in an error message
    }    
});

module.exports = shortUrlRoute;