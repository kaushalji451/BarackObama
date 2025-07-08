const express = require("express");
const Contact = require("../models/contactus");
const main = require("../initdb/connectDb");
const {sendEmailforContactus} = require("../utils/sendEmail");
main();

const contactRoute = express.Router();

contactRoute.post("/",async(req,res)=>{
  try {
      let data  = await Contact.insertOne(req.body);
      sendEmailforContactus(data);
      res.status(200).json({message : "data saved successfully"})
  } catch (error) {
    res.status(400).json({message : error});
  }
})

module.exports = contactRoute;

