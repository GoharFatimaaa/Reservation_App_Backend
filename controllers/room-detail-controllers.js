const mongoose = require('mongoose');

const RoomDetail= require('../models/RoomDetail');
const RoomType = require('../models/RoomType');
const HttpError = require('../models/http-error');

const createRoomDetail = async (req, res, next) => {
  
    // const roomdetail = new RoomDetail(req.body);
    // try {
    //   await roomdetail.save();
  
    //   // const token = await user.generateAuthToken();
  
    //   res.status(201).send(roomdetail);
    // //   messageData(user.email, user.name);
  
    // } catch (e) {
    //   res.status(400).send(e);
    // }
    // const errors = validationResult(req);
    // let errors;
    // if (!errors.isEmpty()) {
    //   return next(
    //     new HttpError('Invalid inputs passed, please check your data.', 422)
    //   );
    // }
  
    const { roomName, location,roomTypeID} = req.body;
  
  
    const createdRoom = new RoomDetail({
        roomName,
        location,
        roomTypeID
    });
  
  
    let room;
    try {
      room = await RoomType.findById(roomTypeID);
    } catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again.',
        500
      );
      return next(error);
    }
  
    if (!room) {
      const error = new HttpError('Could not find rooms for provided id.', 404);
      return next(error);
    }
  
  
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdRoom.save({ session: sess });
      room.RoomDetail.push(createdRoom);
      await room.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ roomDetail: createdRoom });
    };



    const getRoomDetailByRoomId = async (req, res, next) => {
        const roomId = req.params.uid;
      
        // let places;
        let roomdetail;
        try {
          roomdetail= await RoomType.findById(roomId).populate('RoomDetail');
        } catch (err) {
          const error = new HttpError(
            'Fetching places failed, please try again later.',
            500
          );
          return next(error);
        }
      
        // if (!places || places.length === 0) {
        if (!roomdetail || roomdetail.RoomDetail.length === 0) {
          return next(
            new HttpError('Could not find room details for the provided room id.', 404)
          );
        }
      
        res.json({
            RoomDetail:roomdetail.RoomDetail.map(room=>
            room.toObject({ getters: true })
          )
        });
      };

      exports.createRoomDetail=createRoomDetail;
      exports.getRoomDetailByRoomId=getRoomDetailByRoomId;