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

User.pre('save',async function(){
    if(!this.isModified("password")) return;
    const salt  = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

User.methods.checkPassword = async function (inputPassword){
    const result = await bcrypt.compare(inputPassword,this.password);
    return result;
}

User.methods.createToken =  function(){
    return jwt.sign(
        {userId:this._id, name:this.UserName},
        process.env.JWT_KEY,
        {expiresIn:process.env.JWT_LIFETIME}
    )
}
module.exports = mongoose.model('User',User)
