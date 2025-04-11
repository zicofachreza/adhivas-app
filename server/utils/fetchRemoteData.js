'use strict'

const axios = require('axios')

async function fetchRemoteData() {
    const URL = process.env.REAL_TIME_DATA_URL
    const response = await axios.get(URL)
    return response.data
}

module.exports = fetchRemoteData
