const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config()
const authRoute = require('./src/routes/auth.route')
require('./helpers/init_mongodb')

const app = express();
app.use(morgan('dev'))
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res, next) => {
    res.send('Hello from express app')
})

app.use('/auth', authRoute)

app.use(async (req, res, next) =>{
    // const error = new Error('Not Found!!')
    // error.status = 404;
    // next(error);

    next(createError())
})

app.use(async(err, req, res, next) =>{
    res.status = err.status || 500;
    res.send({
        error:{
            status: err.status,
            message: err.message
        }
    })

})

app.listen(PORT, ()=>{
    console.log(`server is up and running on ${PORT}`)
})