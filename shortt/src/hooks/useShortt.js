import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const useShortt = () => {
    const baseUrl = 'https://shortt.danielmattox.com'
    const apiUrl = 'https://shorttapi.danielmattox.com'
    // const apiUrl = 'http://localhost:5555'
    const history = useHistory()
    const [stats, updateStats] = useState({
        total: 0,
        clicks: 0,
        visits: 0
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
    const [origUrl, updateOrigUrl] = useState(null)

    useEffect(() => {
        getStats()
    }, [])

    const addUrl = values => {
        axios.post(`${apiUrl}/v1/shorturl`, values).then(res => {
            updateOrigUrl(values.longUrl)
            if (res.data.tryUrl && res.data.error) {
                updateTryUrl({
                    text: res.data.tryUrl
                })
                updateMessage({
                    text: res.data.error
                })
            }
            if (res.data.tryUrl && res.data.message) {
                updateTryUrl({
                    text: res.data.tryUrl
                })
                updateMessage({
                    text: res.data.message
                })
                history.push('/success')
            }
            if (res.data.blurb && res.data.error) {
                updateBlurb({
                    text: res.data.blurb
                })
                updateMessage({
                    text: res.data.error
                })
                
            }
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                updateMessage({
                    text: err.error
                })
            }
            else if (err.request) { // No response or unable to send
                updateMessage({
                    text: 'The server could not be reached.'
                })
            } else { // The world is ending
                updateMessage({
                    text: 'The world is literally ending, right now.'
                })
            }
        })
    }

    const getStats = () => {
        axios.get(`${apiUrl}/stats`).then(res => {
            updateStats({
                total: res.data.total,
                clicks: res.data.clicks,
                visits: res.data.visits
            })
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                updateMessage({
                    text: err.error
                })
            }
            else if (err.request) { // No response or unable to send
                updateMessage({
                    text: 'The server could not be reached.'
                })
            } else { // The world is ending
                updateMessage({
                    text: 'The world is literally ending, right now.'
                })
            }
        })
    }
    const resetAll = () => {
        updateMessage({
            text: null
        })
        updateBlurb({
            text: null
        })
        updateTryUrl({
            text:null
        })
        updateOrigUrl(null)
        getStats()
        history.push('/')
    }

    return [stats, addUrl, message, blurb, baseUrl, tryUrl, origUrl, resetAll]

}