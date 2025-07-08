const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const dotenv = require("dotenv");
dotenv.config();
const contactRoute = require("./routes/contact.route");
const scheduleRoute = require("./routes/schedule.route");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.json("done");
})

app.use("/contact",contactRoute);
app.use("/schedule",scheduleRoute);


app.listen(port,()=>{
    console.log(`listning on port ${port}`);
})
