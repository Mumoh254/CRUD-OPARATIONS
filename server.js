
const express = require('express');
const mongoose = require('mongoose');
const taskModel = require('./models/taskModel');


const dotenv = require('dotenv').config();

//import   router
const Taskroutes = require('./routes/taskRoutes');

//express  object
const      app    =  express();

//using  routes  middleware
app.use("/api/v1/tasks/welttallis",Taskroutes);


app.use(express.json())

//port
const  PORT   =   process.env.PORT  ||   5000


//post   Request 


//connect   to  the  database

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

    console.log("   connected   to  database")

    app.listen( process.env.PORT ,  (  req  ,  res) => {

        console.log(   `  server    running  on  port ${PORT}`)
    })
})

.catch((err)=>{
    console.log(err)
})