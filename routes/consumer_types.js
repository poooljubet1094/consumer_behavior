var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/consumer-types/discount-seeker');
});

router.get('/:type', function(req, res, next) {

  const consumerTypes = [
    {
      name: "Discount Seekers",
      svgData: "M12,1C10.89,1 10,1.9 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3A2,2 0 0,0 12,1M10,6C9.73,6 9.5,6.11 9.31,6.28H9.3L4,11.59L5.42,13L9,9.41V22H11V15H13V22H15V9.41L18.58,13L20,11.59L14.7,6.28C14.5,6.11 14.27,6 14,6",
      description: "It’s not hard to understand why discount seekers aren't valuable to your business. They shop around, searching multiple sites or stores trying to find the best place, and will always base their buying decisions on how much they can save."
    },
    {
      name: "Wandering",
      svgData: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H11V7H12.5V11.3L16.2 9.2L17 10.5L12.5 13Z",
      description: "If discount seekers are the least loyal type of online customers, wandering customers are right behind with no idea what they want to buy but a desire too."
    },
    {
      name: "Loyal Customer",
      svgData: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
      description: "Loyal Customers are the driving force behind not only repeat purchase but also your brand's overall success and longevity."
    },
    {
      name: "Impulsive Buyer",
      svgData: "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z",
      description: "Impulsive buyers like wandering consumers don’t go shopping with a specific product in mind instead, individuals who make purchases based on what appears to be a good idea. impulsive consumers are typically preoccupied with acquiring the latest goods because of those thinking. They are the ones who will substitute a perfectly good product for them that is more up to date or trendy. This make impulsive buyers especially vulnerable to spending in fast changing areas like fashion, cosmetics and technology."
    }
  ];

  let consumerType;

  switch(req.params.type) {
    case 'discount-seeker':
      consumerType = consumerTypes[0];
      break;
    case 'wandering':
      consumerType = consumerTypes[1];
      break;
    case 'loyal-customer':
      consumerType = consumerTypes[2];
      break;
    case 'impulsive-buyer':
      consumerType = consumerTypes[3];
      break;
  }

  res.render('consumer_types', {
    consumerType: consumerType
  });
});

module.exports = router;
