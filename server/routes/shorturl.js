const express = require("express");
const { nanoid }  = require("nanoid/non-secure");
const validUrl = require("valid-url");
const config = require("config");
const Url = require("../models/url");
const cors = require('cors')
const ExpressBrute = require('express-brute')

var shortUrlRoute = express.Router()
const store = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)

shortUrlRoute.post("/", cors(), bruteforce.prevent, async (req, res)=>{
    const longUrl = req.body.longUrl; // The URL the user wants to shorten
    const baseUrl = config.get("baseURL"); // Our server
    const urlCode = nanoid(8)
    const urlSuffix = req.body.urlSuffix || urlCode // The code the user wants to change it to
    const privateLink = req.body.private

    if(validUrl.isUri(longUrl)){

        try{
            var url = await Url.findOne({longUrl : longUrl})
            if(url){
                return  res.status(200).json({
                    message: 'That URL already has a shortened version in the system!',
                    tryUrl: url.shortUrl
                }) // If we get back a string that already exists, the frontend should tell the user
            }else{

                var suffixed = await Url.findOne({urlCode: urlSuffix})
                if (suffixed){
                    return res.status(200).json({
                        error: 'That shortened URL exists in the system, try another suffix',
                        blurb: urlCode
                    }) // If someone else used this suffix in a URL, suggest the short code
                }
                else {
                    // const shortUrl = baseUrl + "/" + urlCode;
                    const shortUrl = `${baseUrl}/${urlSuffix}`
                    url  = new Url({
                        longUrl,
                        shortUrl,
                        urlCode: urlSuffix,
                        clickCount: 0,
                        private: privateLink
                    })

                    await url.save()
                    return  res.status(201).json({
                        message: 'Your URL has been created!',
                        tryUrl: url.shortUrl
                    })
                }
            }
        }catch(err){
            console.error(err.message);
            return res.status(500).json({
                error: `Internal server error: ${err.message}`
            })
        }
    }else{
        res.status(400).json({
            error: "Invalid URL. Please enter a valid url for shortening."
        }) // Present this to the user in an error message
    }    
})

module.exports = shortUrlRoute;