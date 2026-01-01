const express = require("express");
const app = express();

//middlewares
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.send("<h1>Serever Is Up........</h1>");
});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is runing on http://${HOST}:${PORT}`);
});
