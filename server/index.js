const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session');
const {SERVER_PORT, SESSION_SECRET} = process.env; 

require('dotenv').config()

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use( bodyParser.json() );

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use( checkForSession );

app.listen(SERVER_PORT, () => {
    console.log(`This is port: ${SERVER_PORT}`)
})