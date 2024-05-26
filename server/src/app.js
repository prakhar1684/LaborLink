const express = require("express");
const cors = require("cors");

const app = express();
require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    Credential: true,
  })
);

const Userrouter=require('./route/user');
app.use("/", Userrouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3400, (req, res) => {
  console.log("server is listening in port 3400 ");
});
