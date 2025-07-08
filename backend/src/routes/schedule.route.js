const express = require("express");
const Schedule = require("../models/schedule");
const main = require("../initdb/connectDb");
const {sendEmailForSchedule} = require("../utils/sendEmail");
main();
const multer = require('multer');
const storage = multer.memoryStorage(); // or diskStorage if needed
const upload = multer({ storage: storage });


const contactRoute = express.Router();

contactRoute.post("/",upload.none(),async (req, res) => {
      try {
      let data  = await Schedule.insertOne(req.body);
      sendEmailForSchedule(data);
      res.status(200).json({message : "data saved successfully"})
      } catch (error) {
        res.status(400).json({message : error});
      }
})

module.exports = contactRoute;

