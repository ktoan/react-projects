const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(express());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening from port ${process.env.PORT}`);
});
