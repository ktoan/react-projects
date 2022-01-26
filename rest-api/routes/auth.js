const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const newPassword = bcrypt.hash(req.body.password, salt);
    console.log(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: newPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
