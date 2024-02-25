// --------------------------------------------------

const User = require("../model/db.model");
const send = require("../mail/mail.js");

// Home route logic
const home = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

// Save logic
const saveUser = async (req, res) => {
  try {
    const { userID, ...data } = req.body;
    const users = await User.find();

    const newUser = new User({ ...data });
    newUser.addingUserId(users.length + 1);

    // Manually set userID as the first key
    const userData = { userID: newUser.userID, ...newUser.toObject() };
    const savedUser = await User.create(userData);

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

// Update logic
const updateUser = async (req, res) => {
  try {
    const { userID } = req.body;
    const updatedUser = await User.findOneAndUpdate({ userID }, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

// Delete logic
const deleteUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const deletedUser = await User.findOneAndDelete({ userID });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
};

//send mail logic
const sendMailTo = (req, res) => {
  const details = req.body;
  send(details.selectedRows);
};

module.exports = { home, saveUser, updateUser, deleteUser, sendMailTo };
