const express = require('express');
const router = express.Router()

const {changeEmail, changePassword, changeUserName} = require('../controllers/settings')

router.route('/changeMail').post(changeEmail)
router.route('/changePassword').post(changePassword)
router.route('/changeUserName').post(changeUserName)


module.exports = router