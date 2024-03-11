

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, function(){
    console.log("The server is running.");
});

app.get("/", function(req, res){
    // res.send("<h1>Hello, World</h1>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/contact.html");
});
