const express = require("express");
const { BookingModel } = require("../models/booking.model");
const { FlightModel } = require("../models/flight.model");
const { UserModel } = require("../models/users.model");

const BookingRouter = express.Router();

BookingRouter.use(express.json());

BookingRouter.post("/booking", async (req, res) => {
  const payload = req.body;
  try {
    let user = payload.user;
    let fid = payload.flight;
    const Flight = await FlightModel.findOne({ _id: fid });
    const User = await UserModel.findOne({ _id: user });
    const newBooking = new BookingModel({ user: User, flight: Flight });
    await newBooking.save();
    res.status(201).send("Booked Successfully");
  } catch (err) {
    console.log(err);
    res.send({ msg: err });
  }
});

BookingRouter.get("/dashboard", async (req, res) => {
  try {
    let data = await BookingModel.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.send({ msg: err });
  }
});

module.exports = { BookingRouter };
