//ket noi vs network node js
require('dotenv').config()

const app = require("./src/app");

const PORT = process.env.PORT || 3056
const server = app.listen(PORT,()=>{
    console.log(`WSV eCommerce start with ${PORT} `);
})

// process.on('SIGINT', ()=>{
//     server.close(()=> console.log("Exit server express"))
//     // notify.send()
// })

//cấu hình server xong là never đụng