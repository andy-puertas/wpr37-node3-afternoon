require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session');
const {SERVER_PORT, SESSION_SECRET} = process.env; 


// middleware
const checkForSession = require('./middlewares/checkForSession');

// controllers
const swag_controller = require('./controllers/swag_controller')

const app = express();

app.use( bodyParser.json() );

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use( checkForSession );

// SWAG
app.get('/api/swag', swag_controller.read)

app.listen(SERVER_PORT, () => {
    console.log(`This is port: ${SERVER_PORT}`)
});