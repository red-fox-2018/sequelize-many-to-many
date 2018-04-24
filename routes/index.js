const routes = require('express').Router()


routes.get('/',(req, res) => {
    res.send('masuk')
})



module.exports = routes