const express = require('express');
const router = express.Router()

const {changeEmail, changePassword, changeUserName} = require('../controllers/settingsController')

router.route('/changemail').post(changeEmail)
router.route('/changepass').post(changePassword)
router.route('/changeuser').post(changeUserName)


module.exports = router