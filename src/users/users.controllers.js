const uuid = require('uuid')

const usersDB = [
    {
        id: '6438461d-b35a-4481-98c4-e0550feb3d2b',
        first_name: 'Cristina',
        last_name: 'Gómez',
        email: 'maria.c@gmail.com',
        password: 'cistina2000',
        birthday: '2000/10/04'
    },
    {
        id: '45b1ebbd-ca98-4b53-8585-74430b25cfa4',
        first_name: 'Erika',
        last_name: 'López',
        email: 'erika.lopez@gmail.com',
        password: 'erika1234',
        birthday: '2000/02/10'
    },
    {
        id: 'e3566835-17aa-4843-9c14-7df45317f09c',
        first_name: 'Javier',
        last_name: 'C',
        email: 'venerablepseudo.11@gmail.com',
        password: '5683',
        birthday: '2000/11/28'
    },
]

const getAllUsers = () => {
    return usersDB
}

const getUsersById = id => {
    return usersDB.find(user => user.id === id)
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = { getAllUsers, getUsersById, createUser }