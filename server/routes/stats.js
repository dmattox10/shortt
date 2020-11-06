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
    const totalUrls = clicksArray.length
    const visitors = db.get('visits')
    .value()
    const totalClicks = clicksArray.reduce((previous, current) => {
        return parseInt(previous.clickCount) + parseInt(current.clickCount)
    }, 0)
    const clickedOn = clicksArray.map(link => {
        return link.clickCount}).reduce((sum, clicks) => {
        return sum + clicks
    }, 0)
    console.log(clickedOn)
    res.status(200).json({
        total: totalUrls,
        clicks: clickedOn,
        visits: visitors
    })
})

module.exports = statsRoute