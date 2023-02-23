const express = require("express");
const UserRouter = express.Router();
const { UserModel } = require("../models/users.model"); // jw and bcrypt optional
const bcrypt = require("bcrypt");

UserRouter.get("/all", async (req, res) => {
  try {
    let allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

UserRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send("Email Already exists");
    }
    bcrypt.hash(password, 8, async (err, hashed_pass) => {
      if (err) {
        console.log(err);
      } else {
        let newUser = new UserModel({ email, name, password: hashed_pass });
        await newUser.save();
        res.status(201).send("User registered successfully");
      }
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

UserRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(201).send({ msg: "login successfull" });
        } else {
          console.log(err);
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send("User does not exist");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { UserRouter };
