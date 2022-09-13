const express = require('express')
const Console = require("console");

const app = express()
app.get('/',(reqest,response)=> {
return response.send("Hello, world!")
})
app.listen(3000,()=>{
    Console.log('Application runing on http://localhost:3000')
})