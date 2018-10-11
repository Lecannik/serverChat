let express = require('express');
let router = express.Router();
let User = require('../service/userService');


router.get('/getTest', function (req, res, next) {
    try{
        console.log("\x1b[46m", "Test api worked");
        let result = new User('testName', 'testPass', 'testMail');
        result.createUser();
        res.end("TEST API  worked!!!");
    }
    catch (e) {
        console.log("\x1b[43m", e);
    }
});



module.exports = router;