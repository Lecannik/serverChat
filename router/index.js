let express = require('express');
let router = express.Router();

/* GET home page. */
module.exports = function (app) {

    app.use('/', require('./userRouter'));


};