const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const reviewRoutes = require("./routes/reviewF");
const registerRoutes = require("./routes/registerF");

dotenv.config();

const app = new express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true})
.then(()=> {
    console.log("Connected to Database... YAY!");

})
.catch((err) => { console.log(err)});
 
app.use("/api/reviewF", reviewRoutes);
app.use("/api/registerF", registerRoutes);

app.listen(4000, () => {
    console.log("Server is Running");
});