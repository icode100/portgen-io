const express = require('express');
const router = express.Router()

const {changeEmail, changePassword, changeUserName} = require('../controllers/settingsController')

router.route('/changeMail').post(changeEmail)
router.route('/changePass').post(changePassword)
router.route('/changeUser').post(changeUserName)


module.exports = router