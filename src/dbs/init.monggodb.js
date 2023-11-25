'use strict'

const mongoose = require('mongoose')
const { db:{host,name,port} } = require("../configs/config.mongodb")
const connectString = `mongodb://${host}:${port}/${name}`
const {countConnect} = require('../helpers/check.connect')
console.log(connectString);

//dev
class Database {
    constructor(){
        this.connect()
    }
    //connect
    connect(type = 'mongodb'){
        //1 === 1 là môi trường dev in ra log
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color:true})
        }
mongoose.connect(connectString).then( _ =>{
    console.log(`Connected Mongodb Success`), countConnect()
}).catch(err => console.log(`Error Connect!`))

    }
    //instance
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }

    
}

const instanceMongodb = Database.getInstance()

module.exports = mongoose;