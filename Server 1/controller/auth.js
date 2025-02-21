const passport = require("passport");
const jwt = require("jsonwebtoken");
const authKeys = require("../middleware/authKeys");
require("dotenv").config();

const User = require("../model/user");
const Recruiter = require("../model/recruiter");



const SignUp = async (req, res) => {
  try {
    // Extract data from the request body
    const data = req.body;

    // create a new user
    let user = new User({
      email: data.email,
      password: data.password,
      type: data.type,
      _id: data._id,
    });

    // Create user details based on user type
    user
      .save()
      .then(() => {
        const userDetails =
          user.type == "recruiter"
            ? new Recruiter({
                userId: user._id,
                name: data.name,
                contactNumber: data.contactNumber,
                bio: data.bio,
                profile: data.profile,
              }):null

        userDetails
          .save()
          .then(() => {
            // Token
            const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);
            res.json({
              token: token,
              type: user.type,
              _id: user._id,
            });
          })
          .catch((err) => {
            user
              .delete()
              .then(() => {
                res.status(400).json(err);
              })
              .catch((err) => {
                res.json({ error: err });
              });
            err;
          });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (err) {
    // Handle errors during user creation or user details creation
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
};


// Define a function for user Login
const Login = (req, res, next) => {
  
  passport.authenticate(
    "local",
    { session: false },
    function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(401).json(info);
        return;
      }
      // Token
      const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);
      res.json({
        token: token,
        type: user.type,
        _id: user._id,
      });
    }
  )(req, res, next);
};


module.exports = {
  SignUp,
  Login,
  
};

