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
        return
    }

    const getStats = () => {
        return
    }

    return [stats, addUrl, message, blurb]

}