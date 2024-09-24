
const express = require('express');
const taskModel = require('../models/taskModel');
const { createTask, getTasks , getTask , deleteTask  , updateTask} = require('../controllers/taskController');

//router  variable

const  router  =  express.Router();

//creating   routes

router.post("/api/v1/tasks/welttallis" , createTask)

router.get("/api/v1/tasks/welttallis" , getTasks)

router.get("/api/v1/tasks/welttallis/:id" , getTask)

router.delete("/api/v1/tasks/welttallis/:id" , deleteTask)
router.put("/api/v1/tasks/welttallis/:id" , updateTask)

module.exports  =   router;
