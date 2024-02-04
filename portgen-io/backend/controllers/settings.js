import UserModel from '../models/User.js';

const changeEmail = async (req, res) =>{
    const {Email, NewMail} = req.body;
    const UserFound = await UserModel.find({Email : Email}).exec();

    if (req.user._id === UserFound._id){
        if(Email === NewMail){
            throw new BadRequestError("use a new email");
        }
        else{
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: { email: NewMail } },
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
    const UserFound = await UserModel.find({Email : Email}).exec();

    if (req.user._id === UserFound._id){
        if(UserFound.passWord === NewPassword){
            throw new BadRequestError("use a new password");
        }
        else{
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: { passWord: NewPassword } },
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
    const UserFound = await UserModel.find({Email : Email}).exec();

    if (req.user._id === UserFound._id){
        if(UserFound.UserName === NewUsername){
            throw new BadRequestError("use a new user");
        }
        else{
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: { passWord: NewPassword } },
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

module.exports = {
    changeEmail,
}