const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Elise Bouer",
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    default:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Elise.png",
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: "Link is not valid",
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "Wrong email format",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password
) {
  const UnauthorizedError = new Error("Unauthorized user");
  UnauthorizedError.statusCode = 401;
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        throw UnauthorizedError;
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw UnauthorizedError;
        }
        return user;
      });
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;