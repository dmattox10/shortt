import { useState, useEffect } from 'react'
import axios from 'axios'

export const useShortt = () => {
    const baseUrl = 'https://shortt.danielmattox.com'
    const [stats, updateStats] = useState({
        total: 88,
        clicks: 107,
        visits: 143
    })
    const [message, updateMessage] = useState({
        text: null
    })
    const [blurb, updateBlurb] = useState({
        text: null
    })
    const [tryUrl, updateTryUrl] = useState({
        text: null
    })

    useEffect(() => {
        getStats()
    }, [])

    const addUrl = data => {
        axios.post('http://localhost:5555/v1/shorturl', data).then(res => {
            if (res.data.blurb) {
                updateBlurb(res.data.blurb)
            }
            if (res.data.message) {
                updateMessage(res.data.message)
            }
            if (res.data.try) {
                updateTryUrl(res.data.try)
            }
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                console.log(err)
            }
            else if (err.request) { // No response or unable to send
                console.log(err)
            } else { // The world is ending
                console.log(err)
            }
        })
    }

    const getStats = () => {
        axios.get('http://localhost:5555/stats').then(res => {
            updateStats({
                total: res.data.total,
                clicks: res.data.clicks,
                visits: res.data.visits
            })
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                console.log(err)
            }
            else if (err.request) { // No response or unable to send
                console.log(err)
            } else { // The world is ending
                console.log(err)
            }
        })
    }

    return [stats, addUrl, message, blurb, baseUrl, tryUrl]

}