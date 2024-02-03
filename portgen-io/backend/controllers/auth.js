const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

// register user
const register = async (req, res) => {
  const { UserName, Email, RecoveryPin, Password, CnfPass } = req.body;
  notUnique = await User.findOne({ Email });
  if (notUnique) throw new BadRequestError("User Already Exists ");
  if (Password !== CnfPass) throw new BadRequestError("Passwords do not match");
  const user = await User.create({ UserName, Email, Password, RecoveryPin });
  const token = user.createToken();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.UserName, email: user.Email }, token: token });
};

// login user

const login = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) throw new BadRequestError("incomplete credentials");
  const user = User.findOne({ Email });
  if (!user) throw new UnauthenticatedError("user not found");
  const isPass = await user.checkPassword(Password);
  if (!isPass) throw new UnauthenticatedError("invalid credentials");
  const token = user.createToken();
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