const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
//register

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkEmail = await User.findOne({ email });

    if (checkEmail)
      return res.status(208).json({
        data:null,
          code: 208,
          success: false,
          message: "User already exists! Try Again",
        
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json ({
      code: 200,
      data: {
        userName,
        email,
      },
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: null,
      success: false,
      message: "Some error occurred",
    });
  }
};

//login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't  exists! Please Register",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//logout

//auth middleware

module.exports = { registerUser, loginUser };
