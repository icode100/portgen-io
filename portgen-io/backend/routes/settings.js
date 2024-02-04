const express = require('express');
const router = express.Router()

const {changeEmail} = require('../controllers/settings')

router.route('/changeMail').post(changeEmail)

module.exports = router