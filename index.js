const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Your app running on port ${process.env.PORT}`)
);
