const express = require('express');

const roomtypeController = require('../controllers/room-type-controllers');

const router = express.Router();

router.post('/roomtype',roomtypeController.createRoomType );

module.exports = router;