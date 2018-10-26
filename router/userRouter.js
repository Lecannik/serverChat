let express = require('express');
let router = express.Router();
let User = require('../service/userService');


 router.get('/getTest', function (req, res, next) {
     try {

         console.log("\x1b[46m", "Test api worked");
         let result = new User({userName: "testName", userPass: 'testPass', userMail: 'testMail'});


         result.createUser();
         res.json({"code": 'gettest', "name": result.objParams.userName, "pass": result.objParams.userPass, "mail": result.objParams.userMail});

         //   res.end(result);
     }
     catch (e) {
         console.log("\x1b[43m", e);
     }
 });


router.get('/excel', async function (req, res, next) {

    let resultExcel = new User();
    let result = await resultExcel.openExcel();

    res.json({"code": "excelFile", 'res': result})


});


module.exports = router;