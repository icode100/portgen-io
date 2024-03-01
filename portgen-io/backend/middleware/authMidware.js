const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {UnauthorizedError, UnauthenicatedError} = require('../errors');

const auth_midware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenicatedError('provide the token');
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY)
        // attach the user to the job routes
        req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {

        throw new UnauthorizedError("Authentication invalid");
    }
}

module.exports = auth_midware;