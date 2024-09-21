
const express = require('express');
const taskModel = require('../models/taskModel');
const { createTask, getTasks , getTask , deleteTask} = require('../controllers/taskController');
//separation  of    concerns  

//router  variable

const  router  =  express.Router();

//creating   routes

router.post("/api/v1/tasks/welttallis" , createTask)

//get/read  data  from   database
//gets   all  data   from   the  database  
router.get("/api/v1/tasks/welttallis" , getTasks)

router.get("/api/v1/tasks/welttallis/:id" , getTask)

router.delete("/api/v1/tasks/welttallis/:id" , deleteTask)








module.exports  =   router;
