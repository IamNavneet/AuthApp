const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
        .then(() => {
            console.log('mongodb connected')
        }).catch((err) => {
            console.log(err)
        })

mongoose.connection.on('connected', () =>{
console.log('database connected')
})

mongoose.connection.on('error', (err) =>{
    console.log('database connection error', err)
})

mongoose.connection.on('disconnected', () =>{
    console.log('database disconnected')
})

process.on('SIGINT', async () =>{
    await mongoose.connection.close()
    process.exit(0)
})