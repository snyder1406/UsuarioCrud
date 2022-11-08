const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users', usersServices.getUsers)

router.post('/users', usersServices.cretaeNewUser)

router.get('/users/:id', usersServices.getOneUser)

module.exports = router