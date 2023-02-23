const express = require("express");
const FlightRouter = express.Router();
const { FlightModel } = require("../models/flight.model"); // jw and bcrypt optional
const bcrypt = require("bcrypt");

FlightRouter.get("/flights", async (req, res) => {
  try {
    let allFlights = await FlightModel.find();
    res.status(200).send(allFlights);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

FlightRouter.get("/flights/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    let singleFlight = await FlightModel.findOne({ _id: id });
    res.status(200).send(singleFlight);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

FlightRouter.patch("/flights/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await FlightModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(204).send("Updated Flight Successfully");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

FlightRouter.delete("/flights/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await FlightModel.findByIdAndDelete({ _id: id });
    res.status(202).send("Deleted Flight Successfully");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

FlightRouter.post("/flights", async (req, res) => {
  let {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  try {
    let newFlight = new FlightModel({
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price,
    });
    await newFlight.save();
    res.status(201).send("Flight Added successfully");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { FlightRouter };
