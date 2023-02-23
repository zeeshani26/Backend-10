const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./configurations/db");
const { UserRouter } = require("./routes/user");
const { FlightRouter } = require("./routes/flight");

app.use(cors());
app.use(express.json());

app.use("/api", UserRouter);
app.use("/api", FlightRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("server is running on port 8080");
  } catch (e) {
    console.log(e);
  }
});
