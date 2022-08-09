const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const users_key = require("../../models/users_keys");

router.get("/", (req, res) => {
  res.json(users_key);
});

router.get("/:id", (reg, res) => {
  const found_key = users_key.some((users) => users.id === reg.params.id);
  if (found_key) {
    res.send(users_key.filter((users) => users.id === reg.params.id));
  } else {
    res.status(400).json({ msg: "users private key not found" });
  }
});

router.post("/", (reg, res) => {
  const newUser = {
    id: uuid.v4,
    privateKey: reg.body.privateKey,
  };
  if (!newUser.privateKey) {
    return res.status(400).json({ msg: "please fill up your private key" });
  }
  users_key.push(newUser);
  res.json(users_key);
});

module.exports = router;
