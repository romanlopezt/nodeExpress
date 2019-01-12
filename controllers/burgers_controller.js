// Require  ----------------------------------------------
const express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Routes  ----------------------------------------
/* GET */
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});
/* POST */
router.post("/burgers", function (req, res) {

    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {

        // Send back the ID of the new todo
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

/* UPDATE */
router.put("/api/burgers/:id", function (req, res) {
    var burger_id = req.params.id;

    console.log("burger id", burger_id);

    burger.updateOne(["devoured", "id"], [req.body.devoured, burger_id], function (result,err) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export Route to server.js -----------------------------------
module.exports = router;