const fs = require('fs');

// const { validationResult } = require('express-validator');
// const mongoose = require('mongoose');
// const HttpError = require('../models/http-error');
const User = require('../models/User');

const createUser = async (req, res, next) => {
  
  const user = new User(req.body);
  try {
    await user.save();

    // const token = await user.generateAuthToken();

    res.status(201).send(user);
    messageData(user.email, user.name);

  } catch (e) {
    res.status(400).send(e);
  }
  };

  exports.createUser = createUser;