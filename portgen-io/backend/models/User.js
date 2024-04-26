const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = new mongoose.Schema({
    UserName : {
        type:String,
        required:true
    },
    
    Email : {  
        type :String,
        unique:true,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide valid email',
        },
    },
    Password : {
        type :String,
        required: [true, 'Please provide password'],
    },
    RecoveryPin : {
        type :Number,
        required: [true, 'Please provide 4 digit recovery pin'],   
        minlength: 4,
        maxlength: 4, 
    }
})

User.methods.checkPassword = async function (inputPassword){
    console.log(inputPassword, "in side the checkpassword method")
    const result = await bcrypt.compare(inputPassword,this.Password);
    return result;
}

User.methods.createToken =  function(){
    return jwt.sign(
        {userId:this._id, email:this.Email ,name:this.UserName},
        process.env.JWT_KEY,
        {expiresIn:process.env.JWT_LIFETIME}
    )
}
module.exports = mongoose.model('User',User)
