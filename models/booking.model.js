const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  user: { type: Object, ref: "User" },
  flight: { type: Object, ref: "Flight" },
});
const BookingModel = mongoose.model("booking", BookingSchema);
module.exports = { BookingModel };
