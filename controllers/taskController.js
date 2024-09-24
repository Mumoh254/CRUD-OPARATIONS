const taskModel = require("../models/taskModel");
const express = require('express');
const   app  =  express();
app.use(express.json())


//controller   we  save  all   our   call  back    functions



const createTask =  async  (  req ,  res) =>{


    try {

        //take   a   task  from  the   req   body
        //register  to  the  database
        let   task  = await  taskModel.create( req.body)
        res.status(200).json(task)
        console.log(task)
        
    } catch (error) {
        
        res.status(500).json(error)
        console.log("error  creating  task")
    }

}


const  getTasks  =   async  (  req ,  res) =>{


    try {
        
        //get  all  tasks  from  the  database
        const  tasks = await taskModel.find()
        res.status(200).json(tasks)

    } catch (error) {
        res.status(500).json({
            message:  error.message
        })
    }
}

//a  single  data 

const  getTask  =  async  (  req ,  res) =>{
   
    try {
        const  {id}  =  req.params
        const  task  =  await taskModel.findById(id)

        if (!task){

            return res.status(404).json(`No task  with id ${id}`)
        }
        else {

            res.status(200).json(task)
        }
       
        
    } catch (error) {
        
        res.status(500).json({
            message:  error.message
        })
    }
    
}


//delete   a  task

const deleteTask = async (req, res) => {

    try {
        const { id } = req.params;

        // Fetch the task by its ID
        const task = await taskModel.findByIdAndDelete(id);

        // Check if the task exists
        if (!task) {
            return res.status(404).json({ message: `Task with id ${id} not found in the database` });

        } 
        
        else  {

        res.status(200).json({ message: `Task with id ${id} removed from the database` });

        }

    
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};


//update    a  task

const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      
   
      console.log(`  checking   for   task  to  update ${req.params}`);
  
      const updatedTask = await taskModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true } 
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Log after updating task
      console.log(`  task   fully   updated  ${updatedTask}`);
  
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  


module.exports  =  {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask 

}