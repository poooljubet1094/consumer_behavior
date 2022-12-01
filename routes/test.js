var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');

router.post('/', function (req, res, next) {

  var db = new sqlite3.Database('consumer_behavior.db');

  db.exec(`
    insert into tests (age, gender, q1_1, q1_2, q1_3, q1_4, q1_5, q1_6, q1_7, q1_8, q1_9, q1_10, q1_11, q1_12, q1_13) values (
      ${req.body.age}, '${req.body.gender}', '${req.body.q1}', '${req.body.q2}', '${req.body.q3}', '${req.body.q4}', '${req.body.q5}',
      '${req.body.q6}', '${req.body.q7}', '${req.body.q8}', '${req.body.q9}', '${req.body.q10}', '${req.body.q11}', '${req.body.q12}', '${req.body.q13}'
    );
  `);

  db.close();

  res.redirect('/take-test-2');
});

router.get('/', function(req, res, next) {

  const questions = [
    {
      question: "1. WHAT IS YOUR LEVEL?",
      options: [
        { name: "q1", value: "1st Year College" },
        { name: "q1", value: "2nd Year College" },
        { name: "q1", value: "3rd Year College" },
        { name: "q1", value: "4th Year College" }
      ]
    },
    {
      question: "2. WHAT IS YOUR INCOME (allowance, scholar or work)?",
      options: [
        { name: "q2", value: "Less than Php 5,000" },
        { name: "q2", value: "Php 5,000 - Php 10,000" },
        { name: "q2", value: "Php 10,000 - Php 20,000"},
        { name: "q2", value: "More than Php 20,000" }
      ]
    },
    {
      question: " 3.HOW MUCH DO YOU SPEND MONTHLY IN ONLINE SHOPPING?",
      options: [
        { name: "q3", value: "Less than Php 500" },
        { name: "q3", value: "Php 500 - Php 1,000" },
        { name: "q3", value: "Php 1,000 - Php 1,500" },
        { name: "q3", value: "Php 1,500 - Php 2,000" },
        { name: "q3", value: "More than Php 2,000" }
      ]
    },
    {
      question: " 4. HOW OFTEN DO YOU SHOP ONLINE?",
      options: [
        { name: "q4", value: "Daily" },
        { name: "q4", value: "Weekly" },
        { name: "q4", value: "Monthly" },
        { name: "q4", value: "Rarely" }
      ]
    },
    {
      question: "5. HOW MUCH TIME DO YOU SPEND IN ONLINE SHOPPING?",
      options: [
        { name: "q5", value: "Less than 1 hour" },
        { name: "q5", value: "1 hour - 2 hours" },
        { name: "q5", value: "2 hours - 3 hours" },
        { name: "q5", value: "More than 3 hours" },
      ]
    },
    {
      question: "6. SOURCES OF ONLINE SHOPPING INFORMATION",
      options: [
        { name: "q6", value: "Family/ Friends" },
        { name: "q6", value: "TV Advertisement" },
        { name: "q6", value: "Website Advertisement"},
        { name: "q6", value: "Others" }
      ]
    },
    {
      question: "7.  REASONS FOR CHOOSING ONLINE SHOPPING",
      options: [
        { name: "q7", value: "Saves Time" },
        { name: "q7", value: "Comfortable" },
        { name: "q7", value: "Product Comparison" },
        { name: "q7", value: "Available Variety" },
        { name: "q7", value: "Others" }
      ]
    },
    {
      question: "8. WHAT TYPES OF PRODUCTS DO YOU USUALLY SHOP ONLINE?",
      options: [
        { name: "q8", value: "Food" },
        { name: "q8", value: "Apparel" },
        { name: "q8", value: "Accessories" },
        { name: "q8", value: "Electronics & Gadgets" },
        { name: "q8", value: "Healthcare & Fitness" },
        { name: "q8", value: "Books" },
        { name: "q8", value: "Others" }
      ]
    },
    {
      question: " 9. WHAT DO YOU CONSIDER WHEN BUYING PRODUCTS ONLINE?",
      options: [
        { name: "q9", value: "Price" },
        { name: "q9", value: "Packaging" },
        { name: "q9", value: "Vouchers" },
        { name: "q9", value: "Product Reviews" },
        { name: "q9", value: "Others" }
      ]
    },
    {
      question: "10. WHICH E-COMMERCE PLATFORM DO YOU USE THE MOST?",
      options: [
        { name: "q10", value: "Food Panda" },
        { name: "q10", value: "Shopee" },
        { name: "q10", value: "Lazada" },
        { name: "q10", value: "Shein" },
        { name: "q10", value: "Zalora" },
        { name: "q10", value: "Amazon" },
        { name: "q10", value: "Facebook Marketplace" },
        { name: "q10", value: "Others" }
      ]
    },
    {
      question: "11. WHICH E-WALLET DO YOU USE THE MOST?",
      options: [
        { name: "q11", value: "Paypal" },
        { name: "q11", value: "G-Cash" },
        { name: "q11", value: "PayMaya/ Maya App" },
        { name: "q11", value: "None" }
      ]
    },
    {
      question: "12. HOW DO YOU USUALLY PAY WHEN ONLINE SHOPPING?",
      options: [
        { name: "q12", value: "Cash on Delivery" },
        { name: "q12", value: "Credit Card" },
        { name: "q12", value: "Mobile Banking" },
        { name: "q12", value: "Debit Card" }
      ]
    },
    {
      question: "13. ONLINE SHOPPING SATISFACTION",
      options: [
        { name: "q13", value: "Highly Satisfied" },
        { name: "q13", value: "Satisfied" },
        { name: "q13", value: "Neutral" },
        { name: "q13", value: "Dissatisfied" },
        { name: "q13", value: "Highly Dissatisfied" }
      ]
    }
  ]

  res.render('test', {
    questions: questions
  });
});

module.exports = router;
