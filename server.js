const path = require('path')
const favicon = require('serve-favicon')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const moment = require('moment')


// load config
dotenv.config({ path: './config/config.env' })

// passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// favicon 
app.use(favicon(__dirname + '/public/favicon/favicon.ico'))

// body parser
// helps get data from req.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ejs locals (helpers)


// ejs
app.set('view engine', 'ejs')
// ejs layouts
app.use(expressLayouts)
app.set('layout', './layouts/main')

// sessions (must be above passport middleware)
app.use(session({
    // any password
    secret: 'keyboard cat',
    // false = don't want to save session if nothing is modified
    resave: false,
    // false = don't create a session until something is stored 
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


// set global variable
app.use(function (req, res, next) {
    // access current user within our templates
    res.locals.user = req.user || null
    next()
})

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', require('./routes/main'))
app.use('/tasks', require('./routes/tasks'))

// logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))