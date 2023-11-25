'use strict'
const { log } = require('console')
//count connect
const mongoose = require('mongoose')
const _SECONDS = 5000
const os = require('os')
const process = require('process')
const countConnect = ()=>{
    const numConnection = mongoose.connections.length
    console.log(">>>Connection: ", `${numConnection}`);
}

//check overload connect
const checkOverLoad = ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;//check bao nhieu core trong cpu
        const memoryUsage = process.memoryUsage().rss;//check memory used
        //Example maxinum number of connnections based on number of cores
        const maxConnections = numCores *5;
        // console.log(`Active Connection: ${numConnection}`);
        // console.log(`memory usage::: ${memoryUsage/1024/1024} MBs`);
    if(numConnection > maxConnections){
        console.log("Connection overload detected!");
    }
    }, _SECONDS)//Monitor every 5 seconds
}
module.exports = {
    countConnect,checkOverLoad
}


