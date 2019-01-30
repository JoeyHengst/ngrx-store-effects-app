"use strict";
exports.__esModule = true;
var express = require("express");
var controllers_1 = require("./controllers");
var app = express();
var port = process.env.PORT || 9090;
app.use("/api", controllers_1.ProductController);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
