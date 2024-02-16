const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors/index.js");


// change email
const changeEmail = async (req, res) =>{
    const cred = req.body;
    const {email,userId} = req.user;
    console.log(req.user);
    console.log(email)
    const UserFound = await User.findOne({Email:email});
    if (!cred.Email || !cred.NewMail) throw new BadRequestError("incomplete credentials");
    if (!UserFound) throw new UnauthenticatedError("user not found");
    if (UserFound.Email.toString()!==cred.Email) throw new UnauthenticatedError("Emails do not match");
    console.log(cred.NewEmail)
    const user = await User.findByIdAndUpdate(userId, { Email: cred.NewMail }, { new: true, runValidators:true });
    console.log(user)
    res.status(StatusCodes.OK).json({ msg: "email updation successfull",ID:user._id });
}

// change password
const changePassword = async (req, res) =>{
    const cred = req.body;
    const {email,userId} = req.user;
    const UserFound = await User.findOne({Email:email});
    if(!cred.email || !cred.pass) throw new BadRequestError("incomplete credentials");
    if(!UserFound) throw new UnauthenticatedError("user not found");
    if (cred.pass !== cred.cnfpass) throw new BadRequestError("Passwords do not match");
    const user = await User.findByIdAndUpdate(userId,{ Password: cred.pass},{ new: true, runValidators:true });
    res.status(StatusCodes.OK).json({ msg: "password updation successfull",ID:user._id }); 
}

// change username
const changeUserName = async (req, res) =>{
    const cred = req.body;
    const {email,userId} = req.user;
    const UserFound = await User.findOne({Email:email});
    if (!cred.email || !cred.user) throw new BadRequestError("incomplete credentials");
    if (!UserFound) throw new UnauthenticatedError("user not found");
    if (UserFound.Email.toString()!==cred.email) throw new UnauthenticatedError("Emails do not match");
    const user = await User.findByIdAndUpdate(userId, { UserName: cred.user }, { new: true, runValidators:true });
    res.status(StatusCodes.OK).json({ msg: "username updation successfull",ID:user._id });
}

module.exports = {
    changeEmail,
    changePassword,
    changeUserName
}