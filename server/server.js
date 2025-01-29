const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')



mongoose.connect('mongodb+srv://gtasach:QweRtY123@cluster0.ctayp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


const app = express()

const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization','Cache-Control','Expires','Pragma'],
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})