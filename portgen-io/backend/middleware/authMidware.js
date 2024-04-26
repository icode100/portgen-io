const User = require('../models/User');
const jwt = require('jsonwebtoken');


const auth_midware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new Error('provide the token');
    }

    const token = authHeader.split(' ')[1];

    try {
        
            // console.log(token)
            const payload = jwt.verify(token, process.env.JWT_KEY)
            console.log(payload);
            try{
                
                req.user = { userId: payload.userId, email:payload.email, name: payload.name }
            }
            catch(error){
                throw new Error("Some Problem with the token conversion")
            }
        console.log(req.user)
        next()
    } catch (error) {

        throw new Error("Authentication invalid");
    }
}

module.exports = auth_midware;