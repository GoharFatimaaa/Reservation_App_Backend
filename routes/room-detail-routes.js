const express = require('express');

const roomdetailController = require('../controllers/room-detail-controllers');

const router = express.Router();

router.post('/roomdetail',roomdetailController.createRoomDetail );

router.get('/roomtype/:uid',roomdetailController.getRoomDetailByRoomId);

module.exports = router;