const createError = require('http-errors')

exports.login = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "you are logged in successully!!"
        })
        // throw new Error(createError('Not found!!'))
    } catch (error) {
        next(error)
    }
}