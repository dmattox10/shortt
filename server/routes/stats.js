const express = require('express')
const Url = require('../models/url')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { Router } = require('express')

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
        return previous + current.clickCount
    })
    console.log(totalClicks)
    console.log(totalUrls)
    console.log(visitors)
    res.status(200).json({
        total: totalUrls,
        clicks: totalClicks,
        visits: visitors
    })
})

module.exports = statsRoute