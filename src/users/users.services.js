const { getAllUsers, getUsersById, createUser } = require('./users.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUsersById(id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ id: id, message: 'InvalidID' })
    }
}

const cretaeNewUser = (req, res) => {
    const data = req.body
    if (data.id || data.first_name || data.last_name || data.email || data.password || data.birthday) {
        const newData = createUser(data)
        res.status(201).json(newData)
    } else {
        res.status(400).json({ message: 'Missing Data' })
    }
}

module.exports = { getUsers, getOneUser, cretaeNewUser }