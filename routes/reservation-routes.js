const express = require('express');
// const { check } = require('express-validator');

const usersController = require('../controllers/reservation-controllers');
const router = express.Router();

router.post('/signup', usersController.createUser);

// router.post(
//     '/signup',
//     [
//       check('userName')
//         .not()
//         .isEmpty(),
//       check('location')
//       .not()
//       .isEmpty(),
//       check('businessUnit').not()
//       .isEmpty(),
//     ],
//   );
module.exports = router;