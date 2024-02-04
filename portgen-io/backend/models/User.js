const User = new mongoose.Schema({
    UserName : {
        type:String,
        required:true
    },
    // primary key
    email : {  
        type :String,
        required : true,
        unique : true
    },
    passWord : {
        type :String,
        required : true
    },
    recoveryPin : {
        type :Number
    }

})

module.exports = mongoose.model('User', User)