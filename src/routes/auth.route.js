const express = require('express');
const router = express.Router()

router.post('/login', async(req, res, next) => {
    res.status(200).json({
        success: true,
        message: "you are logged in successully!!"
    })
})

module.exports = router