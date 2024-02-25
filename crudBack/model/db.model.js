const { Schema, model } = require("mongoose");

const userSchema = Schema({
  userID: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
});

userSchema.methods.addingUserId = function (newUserID) {
  this.userID = newUserID;
};

const User = model("User", userSchema);

module.exports = User;
