const express = require('express');
const router = express.Router()

const {makeInfo, getInfo} = require('../controllers/infoController')

router.route('/submitinfo').post(makeInfo)
router.route('/getinfo').post(getInfo)



module.exports = router