const express = require('express')
const mongoose = require('mongoose')
const courseRoutes = require('./routes/courseRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()
const cors = require('cors')



mongoose.connect("mongodb+srv://wafaherchi2000:wafaherchi@cluster0.hqutmo4.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('base de donnees connecté!')
})

app.use(cors())
app.use(express.json())
app.use('/api/courses', courseRoutes)
app.use('/api/auth', authRoutes)
app.listen(5000, () => {
    console.log('serveur en marche !')
})