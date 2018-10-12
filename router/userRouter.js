let express = require('express');
let router = express.Router();
let User = require('../service/userService');


 router.get('/gettest', function (req, res, next) {
    try{

        console.log("\x1b[46m", "Test api worked");
        let result = new User({userName: "testName", userPass: 'testPass', userMail:'testMail'});


        result.createUser();
        console.log("\x1b[42m", result);
        res.json({"code": 0, "name": result.createUser()} );
        res.end(result);
    }
    catch (e) {
        console.log("\x1b[43m", e);
    }
});



module.exports = router;