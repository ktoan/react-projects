const User = require("../models/User");

const router = require("express").Router();

router.get("/users", (req, res) => {
  try {
    const users = User.find()
      .then((data) => {
        if (!data) {
          res.status(404).json("Not found!");
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
