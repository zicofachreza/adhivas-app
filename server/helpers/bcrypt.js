'use strict'

const { hashSync, compareSync } = require('bcryptjs')

module.exports = {
    hashPassword: (pw) => hashSync(pw),
    comparePassword: (pwInput, pwDB) => compareSync(pwInput, pwDB),
}
