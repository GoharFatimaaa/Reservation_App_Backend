const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes=require('./routes/reservation-routes')
const roomtypeRoutes=require('./routes/room-type-routes')
const roomdetailRoutes=require('./routes/room-detail-routes')


const app = express();

mongoose
  .connect(
    `mongodb+srv://laiba_faiz:Connecting123@cluster0.cvcfh5e.mongodb.net/scheduling-app?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', userRoutes);
app.use('/room',roomtypeRoutes)
app.use('/room',roomdetailRoutes)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log('Server is up on port ', +port)
})

// module.exports = app;
