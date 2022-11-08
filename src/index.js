const express = require('express')

const app = express()

const usersRouter = require('./users/users.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'server start' })
})

app.use('/', usersRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT))