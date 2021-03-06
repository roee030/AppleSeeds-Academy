const { response } = require('express');
const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const members = require('./Members')
const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Server started and is listen to port 5000');
})
//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Set public folder
app.use(express.static(path.join(__dirname,'public')))
//Get all Members 
app.use('/api/members',require('./routes/api/members'))