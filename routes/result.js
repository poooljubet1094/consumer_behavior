var express = require('express');
var router = express.Router();
var db = require('../createDatabase');

router.get('/:score', function (req, res, next) {

    const score = parseInt(req.params.score);
    let result = {};

    if (score <= 28) {
        result = {
            behavior: "Discount Seeker",
            message: "Discount seekers are focused on the value they save.",
            redirect: "/consumer-types/discount-seeker"
        };
    } else if (score >= 29 && score <= 57) {
        result = {
            behavior: "Wandering Customer",
            message: "Wandering customers draw the largest amount of traffic to the company while making up the smallest percentage of sales revenue.",
            redirect: "/consumer-types/wandering"
        };
    } else if (score >= 58 && score <= 86) {
        result = {
            behavior: "Loyal Buyer",
            message: "Customers give a company repeat business over time.",
            redirect: "/consumer-types/loyal-customer"
        };
    } else if (score >= 87 && score <= 115) {
        result = {
            behavior: "Impulsive Buyer",
            message: "The tendency of a customer to buy goods and services without planning in advance",
            redirect: "/consumer-types/impulsive-buyer"
        };
    }

    res.render('result', {
        result: result,
        score: score
    });
});

module.exports = router;

