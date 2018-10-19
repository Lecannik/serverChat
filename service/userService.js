/*
Здесь будут используемые модули
 */
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');
const fs = require('fs');
const XLSX = require('xlsx');
const request = require('request');

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
            var buf = fs.readFileSync("sheetjs.xlsx");
            var wb = XLSX.read(buf, {type:'buffer'});
             */
            let pathExcel = fs.readFileSync("test.xlsx");
            let w = XLSX.read(pathExcel, {type:'buffer'});
            let json = XLSX.utils.sheet_to_json(w.Sheets[w.SheetNames[0]], {header:1});
            let data = "";
            json.splice(0,1);
            for (let temp of json){
                let datagramm = temp[2];
                data = datagramm.split('|');
                //TODO Разобрать массив датаграмы до запрса


            }


        } catch (err) {
           console.log("\x1b[42m" , err);
        }
    }

}

module.exports = User;