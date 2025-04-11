'use strict'

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const signToken = (payload) => {
    const token = jwt.sign(payload, secret, { expiresIn: '1d' })
    return token
}

const verifyToken = (token) => {
    const payload = jwt.verify(token, secret)
    return payload
}

module.exports = { signToken, verifyToken }
