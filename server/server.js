const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const helmet = require('helmet')
const shortUrlRoute = require("./routes/shorturl")
const getShortenUrlRoute = require("./routes/getshortenurl")
const statsRoute = require('./routes/stats')
const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use("/v1/",getShortenUrlRoute)
app.use("/v1/shorturl", shortUrlRoute)
app.use('/stats', statsRoute)

app.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})
const PORT = 5555
app.listen(PORT, () => console.log(`'Ello ${PORT}.`))