/*
Здесь будут используемые модули
 */
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');
const fs = require('fs');
const buffer = require("buffer");
let pathExcel =fs.readFileSync("test.xlsx");

class User {
    constructor(objParams) {
        let arrPropsForjParamsorThisClass = ['userName','userPass','userMail'];

        this.objParams = objParams;


    }


    async createUser(){

            let formattedDate = new Date( new Date().getTime() - ( new Date().getTimezoneOffset() * 60000 ) );
            let  userObj =
            {
                userName : this.objParams.userName,
                userPass : this.objParams.userPass,
                userMail : this.objParams.userMail,
                dateTime : formattedDate
            };

          let result =  userObj;
            return result;


    };


    async openExcel()
    {
        try {
          //  console.log("\x1b[42m",   pathExcel);
            let dataExcel = JSON.parse(pathExcel.toString());
            console.log("\x1b[42m",dataExcel);


        } catch (err) {
           console.log("\x1b[42m" , err);
        }
    }

}

module.exports = User;