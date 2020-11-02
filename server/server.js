const express = require("express");
const connectDB = require("./config/db");
// const shortid = require("shortid");
// const validUrl = require("valid-url");
const shortUrlRoute = require("./routes/shorturl")
const getShortenUrlRoute = require("./routes/getshortenurl")

const app = express();
connectDB();

app.use(express.json({}));
const PORT = 5555;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));


app.use("/v1/",getShortenUrlRoute)
app.use("/v1/shorturl", shortUrlRoute);

app.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})