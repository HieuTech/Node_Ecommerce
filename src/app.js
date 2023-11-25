const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

//init db
require("./dbs/init.monggodb")
const {checkOverLoad} = require("./helpers/check.connect")
checkOverLoad();

//init routes
app.get("/",(req,res,next)=>{
    const strCompress = "hello Factipjs "
    return res.status(200).json({
        message:"welcome fantipjs",
        metadata:strCompress.repeat(90000)
    })
})
//handle error
module.exports = app;
