const express = require('express');
const router = express.Router()

router.route('/submit').get((req, res)=>{
    res.send('this is the info page')
})

module.exports = router