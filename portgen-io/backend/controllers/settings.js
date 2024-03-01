const User = require('../models/User.js');
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const changeEmail = async (req, res) =>{
    const {Email, NewMail} = req.body;
    const UserFound = await User.findOne({Email : Email}).exec();
    
    if (UserFound !== undefined && req.user.userId === UserFound._id.toString()){
        if(Email === NewMail){
            throw new BadRequestError("use a new email");
        }
        else{
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user.userId },
                { $set: { Email: NewMail } },
                { new: true }
              ).exec();

            res
              .status(StatusCodes.OK)
              .json({ msg: "email updation successfull" });
        }

    }
    else{
        throw new UnauthenticatedError("invalid credentials");
    }   
}


const changePassword = async (req, res) =>{
    const {Email, NewPassword} = req.body;
    const UserFound = await User.findOne({Email : Email}).exec();
    
    if (UserFound !== undefined && req.user.userId === UserFound._id.toString()){
        // const salt  = await bcrypt.genSalt(10);
        // const newPassword = await bcrypt.hash(NewPassword,salt);
        // console.log(newPassword, UserFound.Password)
        // const hi = await bcrypt.compare(NewPassword,UserFound.Password)
        // console.log(hi)

        
        
        if(newPassword === UserFound.Password){
            throw new BadRequestError("use a new password");
        }
        else{
            const salt = await bcrypt.genSalt(10)
            Password = await bcrypt.hash(NewPassword, salt)
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user.userId },
                { $set: { PassWord: newPassword } },
                { new: true }
              ).exec();

            res
              .status(StatusCodes.OK)
              .json({ msg: "password updation successfull" });
        }

    }
    else{
        throw new UnauthenticatedError("invalid credentials");
    } 
}

const changeUserName = async (req, res) =>{
    const {Email, NewUsername} = req.body;
    const UserFound = await User.findOne({Email : Email}).exec();

    if (UserFound !== undefined && req.user.userId === UserFound._id.toString()){
        if(UserFound.UserName === NewUsername){
            throw new BadRequestError("use a new username");
        }
        else{
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user.userId },
                { $set: { UserName: NewUsername } },
                { new: true }
              ).exec();

            res
              .status(StatusCodes.OK)
              .json({ msg: "UserName updation successfull" });
        }

    }
    else{
        throw new UnauthenticatedError("invalid credentials");
    } 
}

module.exports = {
    changeEmail,
    changePassword,
    changeUserName
}