const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  
    maxLength: 20
  },
  title: {
    type: String,
  
  },
  description: {
    type: String,
  
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
   
  },
  taskPriority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
   
  },
  attachments: [
    {
      fileName: {
        type: String
      },
      fileUrl: {
        type: String
      }
    }
  ]
});

const taskModel = mongoose.model('tasks', taskSchema);
module.exports = taskModel;
