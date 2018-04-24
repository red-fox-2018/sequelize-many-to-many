const express = require('express')
const router = express()

router.get('/subject',function(req,res){
    res.render('subject')
})

module.exports = router