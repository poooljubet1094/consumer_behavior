var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');

router.post('/', function(req, res, next) {

    let totalScore = 0;

    Object.values(req.body).forEach(value => {
        totalScore += parseInt(value);
    });

    var db = new sqlite3.Database('consumer_behavior.db');

    db.exec(`
        update tests set q2_1 = ${req.body.q2_1}, q2_2 = ${req.body.q2_2}, q2_3 = ${req.body.q2_3}, q2_4 = ${req.body.q2_4}, q2_5 = ${req.body.q2_5},
        q2_6 = ${req.body.q2_6}, q2_7 = ${req.body.q2_7}, q2_8 = ${req.body.q2_8}, q2_9 = ${req.body.q2_9}, q2_10 = ${req.body.q2_10}, q2_11 = ${req.body.q2_11},
        q2_12 = ${req.body.q2_12}, q2_13 = ${req.body.q2_13}, q2_14 = ${req.body.q2_14}, q2_15 = ${req.body.q2_15}, q2_16 = ${req.body.q2_16},
        q2_17 = ${req.body.q2_17}, q2_18 = ${req.body.q2_18}, q2_19 = ${req.body.q2_19}, q2_20 = ${req.body.q2_20}, q2_21 = ${req.body.q2_21},
        q2_22 = ${req.body.q2_22}, q2_23 = ${req.body.q2_23} where rowid = (select rowid from tests order by rowid desc limit 1);
    `);

    db.close();

    res.redirect(`/result/${totalScore}`);

    res.end();
});

router.get('/', function(req, res, next) {

    const questions = [
        {
            question: "Low Prices of products increase my willingness to buy them.",
            options: [ 
                { name: "q2_1", value: 1 },
                { name: "q2_1", value: 2 },
                { name: "q2_1", value: 3 },
                { name: "q2_1", value: 4 },
                { name: "q2_1", value: 5 },
            ]
        },
        {
            question: "I prefer to buy my needs during sales season.",
            options: [
                { name: "q2_2", value: 1 },
                { name: "q2_2", value: 2 },
                { name: "q2_2", value: 3 },
                { name: "q2_2", value: 4 },
                { name: "q2_2", value: 5 },
            ]
        },
        {
            question: "Coupons/Vouchers can affect my buying behaviour.",
            options: [
                { name: "q2_3", value: 1 },
                { name: "q2_3", value: 2 },
                { name: "q2_3", value: 3 },
                { name: "q2_3", value: 4 },
                { name: "q2_3", value: 5 },
            ]
        },
        {
            question: "Discount can affect me not to shop around.",
            options: [ 
                { name: "q2_4", value: 1 },
                { name: "q2_4", value: 2 },
                { name: "q2_4", value: 3 },
                { name: "q2_4", value: 4 },
                { name: "q2_4", value: 5 },
            ]
        },
        {
            question: "Products have bundle offers (buy one and other free) attract me to buy more.",
            options: [ 
                { name: "q2_5", value: 1 },
                { name: "q2_5", value: 2 },
                { name: "q2_5", value: 3 },
                { name: "q2_5", value: 4 },
                { name: "q2_5", value: 5 },
            ]
        },
        {
            question: "I shop online (24 hours a day, 7 days a week availability).",
            options: [ 
                { name: "q2_6", value: 1 },
                { name: "q2_6", value: 2 },
                { name: "q2_6", value: 3 },
                { name: "q2_6", value: 4 },
                { name: "q2_6", value: 5 },
            ]
        },
        {
            question: "I take my time when I do shopping.",
            options: [ 
                { name: "q2_7", value: 1 },
                { name: "q2_7", value: 2 },
                { name: "q2_7", value: 3 },
                { name: "q2_7", value: 4 },
                { name: "q2_7", value: 5 },
            ]
        },
        {
            question: "There is always something new and exciting when I browse this website.",
            options: [ 
                { name: "q2_8", value: 1 },
                { name: "q2_8", value: 2 },
                { name: "q2_8", value: 3 },
                { name: "q2_8", value: 4 },
                { name: "q2_8", value: 5 },
            ]
        },
        {
            question: "I am more focused on fun and leisure.",
            options: [ 
                { name: "q2_9", value: 1 },
                { name: "q2_9", value: 2 },
                { name: "q2_9", value: 3 },
                { name: "q2_9", value: 4 },
                { name: "q2_9", value: 5 },
            ]
        },
        {
            question: "The site has a wide variety of products that interest me.",
            options: [ 
                { name: "q2_10", value: 1 },
                { name: "q2_10", value: 2 },
                { name: "q2_10", value: 3 },
                { name: "q2_10", value: 4 },
                { name: "q2_10", value: 5 },
            ]
        },
        {
            question: "Display of product in store attracts your attention.",
            options: [ 
                { name: "q2_11", value: 1 },
                { name: "q2_11", value: 2 },
                { name: "q2_11", value: 3 },
                { name: "q2_11", value: 4 },
                { name: "q2_11", value: 5 },
            ]
        },
        {
            question: "Behavior of salesperson affects my purchase behaviour.",
            options: [ 
                { name: "q2_12", value: 1 },
                { name: "q2_12", value: 2 },
                { name: "q2_12", value: 3 },
                { name: "q2_12", value: 4 },
                { name: "q2_12", value: 5 },
            ]
        },
        {
            question: "Social Media triggers me to purchase a product/service online.",
            options: [ 
                { name: "q2_13", value: 1 },
                { name: "q2_13", value: 2 },
                { name: "q2_13", value: 3 },
                { name: "q2_13", value: 4 },
                { name: "q2_13", value: 5 },
            ]
        },
        {
            question: "When I buy product spontaneously, I am feeling released.",
            options: [ 
                { name: "q2_14", value: 1 },
                { name: "q2_14", value: 2 },
                { name: "q2_14", value: 3 },
                { name: "q2_14", value: 4 },
                { name: "q2_14", value: 5 },
            ]
        },
        {
            question: "Popularity of products increases recall value and help in unplanned buying.",
            options: [ 
                { name: "q2_15", value: 1 },
                { name: "q2_15", value: 2 },
                { name: "q2_15", value: 3 },
                { name: "q2_15", value: 4 },
                { name: "q2_15", value: 5 },
            ]
        },
        {
            question: "I intend to keep buying the products from the same shop.",
            options: [ 
                { name: "q2_16", value: 1 },
                { name: "q2_16", value: 2 },
                { name: "q2_16", value: 3 },
                { name: "q2_16", value: 4 },
                { name: "q2_16", value: 5 },
            ]
        },
        {
            question: "I will recommend this specific shop/brand to someone who seeks my advice.",
            options: [ 
                { name: "q2_17", value: 1 },
                { name: "q2_17", value: 2 },
                { name: "q2_17", value: 3 },
                { name: "q2_17", value: 4 },
                { name: "q2_17", value: 5 },
            ]
        },
        {
            question: "The online shop always meets my standards.",
            options: [ 
                { name: "q2_18", value: 1 },
                { name: "q2_18", value: 2 },
                { name: "q2_18", value: 3 },
                { name: "q2_18", value: 4 },
                { name: "q2_18", value: 5 },
            ]
        },
        {
            question: "I would continue to buy their product even if its price increased somewhat.",
            options: [ 
                { name: "q2_19", value: 1 },
                { name: "q2_19", value: 2 },
                { name: "q2_19", value: 3 },
                { name: "q2_19", value: 4 },
                { name: "q2_19", value: 5 },
            ]
        },
        {
            question: "I would say positive feedback about the brand to others.",
            options: [ 
                { name: "q2_20", value: 1 },
                { name: "q2_20", value: 2 },
                { name: "q2_20", value: 3 },
                { name: "q2_20", value: 4 },
                { name: "q2_20", value: 5 },
            ]
        },
        {
            question: "The website displays a visually pleasing design",
            options: [ 
                { name: "q2_21", value: 1 },
                { name: "q2_21", value: 2 },
                { name: "q2_21", value: 3 },
                { name: "q2_21", value: 4 },
                { name: "q2_21", value: 5 },
            ]
        },
        {
            question: "Do you feel safe upon putting your personal information.",
            options:  [ 
                { name: "q2_22", value: 1 },
                { name: "q2_22", value: 2 },
                { name: "q2_22", value: 3 },
                { name: "q2_22", value: 4 },
                { name: "q2_22", value: 5 },
            ]
        },
        {
            question: "Artist or endorsers influence me to buy their products.",
            options:  [ 
                { name: "q2_23", value: 1 },
                { name: "q2_23", value: 2 },
                { name: "q2_23", value: 3 },
                { name: "q2_23", value: 4 },
                { name: "q2_23", value: 5 },
            ]
        },
    ];

    res.render('test2', {
        questions: questions
    });
});

module.exports = router;
