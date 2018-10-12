/*
Здесь будут используемые модули
 */
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');



class User {
    constructor(objParams) {
        let arrPropsForjParamsorThisClass = {
            'userName': "",
            'userPass': "",
            'userMail': ""
        };

        this.objParams = objParams;
        console.log("\x1b[42m",this.objParams);


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


            console.log("\x1b[45m", userObj);
            let result =  userObj;
            return result;


    };

}

module.exports = User;