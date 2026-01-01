const express = require("express");
const multer = require("multer");
const app = express();

//middlewares
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const connection = require("./config/db");

const cartSchema = require("./model/cartSchema");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is runing on http://${HOST}:${PORT}`);
});
