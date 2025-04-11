'use strict'

function errorHandler(err, req, res, next) {
    console.log(err)

    switch (err.name) {
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            res.status(400).json({ message: err.errors[0].message })

        case 'InvalidUsername':
            res.status(400).json({ message: 'Username is required' })
            break

        case 'InvalidPassword':
            res.status(400).json({ message: 'Passwoord is required' })
            break

        case 'InvalidUser':
            res.status(401).json({ message: 'Invalid username or password' })
            break

        case 'InvalidToken':
        case 'JsonWebTokenError':
            res.status(401).json({ message: "You don't have access" })
            break

        case 'Unauthorized':
            res.status(403).json({ message: 'You are not authorized' })
            break

        default:
            res.status(500).json({ message: 'Internal Server Error' })
            break
    }
}

module.exports = errorHandler
