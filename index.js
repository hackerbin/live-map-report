const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testdb1', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}`))