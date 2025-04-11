'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use(require('./routers/router'))
app.use(require('./middlewares/errorHandler'))

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
