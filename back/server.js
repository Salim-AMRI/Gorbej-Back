const express = require("express");
const app = express();
const connect = require("./config");
const root = require("./root");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", root);

app.listen(8000, () => console.log("express yekhdem"));