const router = require("express").Router();
const User = require("../models/databaseUser");
const bcrypt = require('bcrypt');
const databaseUser = require("../models/databaseUser");


//Registration
router.post("/register", async (req, res) => {

    try {
        //create excrypted password
        const salt = await bcrypt.genSalt(10);
        const encryptedPass = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User ({
            userFirstName : req.body.userFirstName,
            userLastName : req.body.userLastName,
            email : req.body.email,
            password : encryptedPass,
            confirmPassword : encryptedPass
        });

        //save new User and save it in dB
        const user = await newUser.save();
        res.status(200).json(user._id);

    } catch (err){
        res.status(500).json(err);
    }

});

//Login System
router.post("/login", async (req, res) => {
    try {
        //find User
        const user = await databaseUser.findOne({email : req.body.email});
        !user && res.status(400).json("You've entered wrong Email or Password");

        //validate User
        const validUser = await bcrypt.compare(req.body.password, user.password);
        !validUser && res.status(400).json("You've entered wrong Email or Password");

        //send response
        res.status(200).json({_id : user._id, userFirstName : user.userFirstName});

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;