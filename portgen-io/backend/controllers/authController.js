const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const oneDay = 1000 * 60 * 60 * 24;



// register user
const register = async (req, res) => {
  console.log(req)
  let { UserName, Email, RecoveryPin, Password, CnfPass } = req.body;
  notUnique = await User.findOne({ Email });
  if (notUnique) throw new BadRequestError("User Already Exists ");
  if (Password !== CnfPass) throw new BadRequestError("Passwords do not match");
  const salt = await bcrypt.genSalt(10)
  Password = await bcrypt.hash(Password, salt)
  const user = await User.create({ UserName, Email, Password, RecoveryPin });
  const token = user.createToken();
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  console.log(user);
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.UserName, email: user.Email }, token: token });

};

// login user
const login = async (req, res) => {
  console.log("this is me print this idiot print this")
  console.log(req.body)
  const { Email, Password } = req.body;
  if (!Email || !Password) throw new BadRequestError("incomplete credentials");
  const user = await User.findOne({ Email });
  if (!user) throw new UnauthenticatedError("user not found");
  console.log(user)
  const isPass = await user.checkPassword(Password);
  if (!isPass) throw new UnauthenticatedError("invalid credentials");
  const token = user.createToken();
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.UserName, email: user.Email }, token: token });
  
};

// logout
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};


module.exports = {
  register,
  login,
  logout,
}
