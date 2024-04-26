const {Router} = require("express");
const router = Router();
const {register,login, getdetails} = require('../controllers/authController');
const auth_midware = require('../middleware/authMidware');

router.post('/register',register);
router.post('/login',login);
router.get('/getdetails',auth_midware,getdetails)

module.exports = router;