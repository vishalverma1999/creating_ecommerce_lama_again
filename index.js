const express = require('express');  
const app = express(); 

app.listen(5000, ()=>{              // if process.env.PORT is available use it else use 5000
    console.log("backend server is running")
});
