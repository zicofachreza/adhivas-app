'use strict'

const authorizeAdminOnly = (req, res, next) => {
    try {
        if (req.dataUser.role === 'Admin') next()
        else throw { name: 'Unauthorized' }
    } catch (error) {
        next(error)
    }
}

module.exports = authorizeAdminOnly
