const RoomType= require('../models/RoomType');
const createRoomType = async (req, res, next) => {
  
    const roomtype = new RoomType(req.body);
    try {
      await roomtype.save();
  
      // const token = await user.generateAuthToken();
  
      res.status(201).send(roomtype);
    //   messageData(user.email, user.name);
  
    } catch (e) {
      res.status(400).send(e);
    }
    };

    exports.createRoomType = createRoomType;