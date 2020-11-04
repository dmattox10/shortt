import { useState, useEffect } from 'react'
import axios from 'axios'

export const useShortt = () => {
    const [stats, updateStats] = useState({
        total: 88,
        clicks: 107,
        visits: 143
    })
    const [message, updateMessage] = useState({
        text: ''
    })
    const [blurb, updateBlurb] = useState({
        text: ''
    })

    useEffect(() => {
        getStats()
    }, [])

    const addUrl = data => {
        axios.post('http://localhost:5555/v1/shorturl', data).then(res => {
            console.log(res.data)
        })
    }

    const getStats = () => {
        axios.get('http://localhost:5555/stats').then(res => {
            updateStats({
                total: res.data.total,
                clicks: res.data.clicks,
                visits: res.data.visits
            })
        })
    }

    return [stats, addUrl, message, blurb]

}