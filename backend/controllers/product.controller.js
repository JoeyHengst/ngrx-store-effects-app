"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get("/pizzas", function (req, res) {
    res.send("Hello, World!");
});
router.post("/pizzas", function (req, res) {
    res.send("Hello, World!");
});
router.put("/pizzas", function (req, res) {
    res.send("Hello, World!");
});
router["delete"]("/pizzas", function (req, res) {
    res.send("Hello, World!");
});
exports.ProductController = router;
