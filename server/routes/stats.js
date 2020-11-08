const express = require('express')
const Url = require('../models/url')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

if (!db.has('visits').value()) {
    db.defaults({ visits: 0 })
    .write()
}

var statsRoute = express.Router()

statsRoute.get('/', async (req, res) => {
    db.update('visits', n => n + 1)
    .write()
    const clicksArray = await Url.find({}, {
        clickCount: 1
    })
    const publicClicks = await Url.find({
        private: false
    }).sort({
        clickCount: 'desc'
    })
    const totalUrls = clicksArray.length
    const visitors = db.get('visits')
    .value()
    const clickedOn = clicksArray.map(link => {
        return link.clickCount}).reduce((sum, clicks) => {
        return sum + clicks
    }, 0)
    const top = publicClicks.slice(0, 3)
    res.status(200).json({
        total: totalUrls,
        clicks: clickedOn,
        visits: visitors,
        top: top
    })
})

module.exports = statsRoute