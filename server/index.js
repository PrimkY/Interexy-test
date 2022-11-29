require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// error hadler - breaks app so its gone the last one
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate() // connection to db
        await sequelize.sync() // synchronization between db and app
        app.listen(PORT, ()=> console.log(`server started on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

start()
