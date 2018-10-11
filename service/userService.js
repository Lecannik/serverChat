/*
Здесь будут используемые модули
 */


class User {
    constructor(objParams) {
        let arrParams = ['userName', 'userPass', 'userMail'];
        this.objParams = objParams;
    }



     createUser(){
            let formattedDate = new Date( new Date().getTime() - ( new Date().getTimezoneOffset() * 60000 ) );
            let userObj = {
                userName : this.objParams.userName,
                userPass : this.objParams.userPass,
                userMail : this.objParams.userMail,
                dateTime : formattedDate
            };



            let result =  userObj;


    };

}

module.exports = User;