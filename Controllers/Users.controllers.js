const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user.model");


function createUserAccount(req, res, next) {
  const payload = req.body;
  const User = UserModel(payload);

  User.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          success: true,
          message: "User created successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    })
    .catch((error) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
          error: error,
        });
      }
    });
};

function signInUser(req, res, next) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is missing",
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is missing",
    });
  }

  UserModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        if (password === response.password) {
          const token = jwt.sign(
            {
                userId:response._id,
            },
            process.env.APPLICATION_JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            success: true,
            message: "Sign In successful",
            token: token,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Email Id or Password is invalid!",
          });
        }
      } else {
        return res.status(200).json({
          success: false,
          message: "Account does not exists!",
        });
      }
    })
    .catch((error) => console.log(error));
};
// forget password
function forgetpassword(req, res, next){
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: "Email Id is not valid",
    });
  }

  UserModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "Password recovery email sent to your inbox.",
          userId: response._id,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Account does not exist",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
};


// newpassword

function newpassword(req, res, next){
  const UserData = req.body;
  const { userId } = req.params;

  UserModel.findByIdAndUpdate(userId, UserData)
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "New password Updated Successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "User does not exist",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
};
module.exports = {
  createUserAccount,
  signInUser,
  forgetpassword,
  newpassword,
};