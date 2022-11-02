const express = require('express');  
const app = express(); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection successful"))
.catch((err)=> console.log(err));

app.use(express.json());  
app.use('/api/users', userRoute);     // jab aap post req bhejoge json mein to ye nahi chalega, b/c our application is not able to any json object. to prevent this write --> app.use(express.json()) before routes;
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, ()=>{              // if process.env.PORT is available use it else use 5000
    console.log("backend server is running")
});
