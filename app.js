const express = require('express');
require('dotenv').config();
const app = express();
let http = require('http');
let url = require('url');
let userService = require('./service/userService');

app.get('/test', function (req, res) {
   console.log("\x1b[42m", process.env.PORT);
    res.send('Hello World!');
});

module.exports = app;


require('./router')(app);
/**
 * 404 ошибка
 */
app.use(function(req, res, next) {
    let err = {};
    err.status = 404;
    next(err);

});




/**
 * Отдать ошибку
 */
app.use(function(err, req, res, next) {
    res.status(err.status);
    res.json({"code": 1});
});





app.listen(process.env.PORT, function () {
        console.log("\x1b[42m",'Example app listening on port 3000!');
});
