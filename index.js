const express = require("express");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000

const app = express();

//enable body parpser

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () =>console.log(`Serve start on ${port}`))