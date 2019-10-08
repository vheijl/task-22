const express = require("express");
const path = require("path");
let Pet = require("./static/Pet");
let app = express();


// Serve static pages
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "static")));

// A page that displays html info about your pets
app.get("/info", (req, res) => {
    // Root option should be fine and dynamic for different host OSs 
    // since we serve public from __dirname
    res.sendFile(path.join("/pets/info.html"), {root: "./public"});
});

// A page that hosts multiple pictures of your pets
app.get("/pictures", (req, res) => {
    res.sendFile(path.join("/pets/pictures.html"), {root: "./public"});
});

// A page that returns a json object of pet info
app.get("/data", (req, res) => {
    res.send(Pet);
});

app.get("/xxx", (req, res) => {
    res.send({a: 1, b:2, c:3});
});

console.log(`Server now running on port ${process.env.PORT || 8080}`);
app.listen(process.env.PORT || 8080);
