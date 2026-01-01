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

// storage engine  configration

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname) // for unique name avoide override file and data of each user
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, //size of file

})


app.post("/saveform", upload.single('fileUpload'), async (req, res) => {
    // res.send(req.file)

    try {
        const { proName, proCategory } = req.body
        const fileUpload = req.file.filename

        const result = await cartSchema({ proName, proCategory, fileUpload })
        await result.save();

        res.status(201).send(`<h1>File uploaded sucessesfully</h1> `)

    } catch (error) {

    }

});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
    console.log(`Server is runing on http://${HOST}:${PORT}`);
});
