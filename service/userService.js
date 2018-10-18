/*
Здесь будут используемые модули
 */
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');
const fs = require('fs');
const XLSX = require('xlsx');
const request = require('request');
let pathExcel = fs.readFileSync("test.xlsx");

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

            /*
              *****  Асинхронная функция создания файла Excel  *****
             */
           /* await fs.appendFile('myNewFile1.xls', pathExcel, function (err) {
                if (err)
                {
                    console.log("\x1b[42m", err);
                }

                console.log('Saved!');
            });
*/
            let workBook = XLSX.read(pathExcel, {type:'buffer'});
            for (let obj in workBook.Sheets.Лист2.C6.c){
                console.log("\x1b[42m", obj);
            }
            //console.log("\x1b[42m", workBook.Sheets['Лист2'].C6.v);
            //TODO  Доделать парсер

        } catch (err) {
           console.log("\x1b[42m" , err);
        }
    }

}

module.exports = User;