
const express = require('express');
const taskModel = require('../models/taskModel');
const { createTask, getTasks , getTask , deleteTask  , updateTask, apps} = require('../controllers/taskController');

//router  variable

const  router  =  express.Router();

//creating   routes
//part   of  optimization 
//refactor   routes

router.route("/").get(getTasks).post(createTask)
router.route("/:id").delete(deleteTask).put( updateTask).get( getTask)
// router.post("/" , createTask)

// router.get("/" , getTasks)
router.get("/app"  , apps)

// router.get("/:id" ,)

// router.delete("/:id" , )
// router.put("/:id" ,)

module.exports  =   router;
