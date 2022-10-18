const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRouters");
app.listen(4000, () => {
  console.log("server started on the port 4000");
});

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    // useNewUrlParser : The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.
    useNewUrlParser: true,
    // useUnifiedTopology: False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true , except for the unlikely case that it prevents you from maintaining a stable connection.
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
