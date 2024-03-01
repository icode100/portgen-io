const express = require('express');
const router = express.Router()
const {make} = require('../controllers/infoController')

router.route('/submit').get((req, res)=>{
    res.send('this is the info page')
})

router.route('/make').post(make)

module.exports = router