

const mongoose = require('mongoose');

const  taskSchema  =   mongoose.Schema({
  
    name:  {

        type:  String,
        require:[
            true , "Please input  your   name "
        ],

        maxLength:  20
    },

  
    title:{
        type:  "String",
        required:[
            false, "please  input   your  title"
        ]
    },

    description:{
        type: "String"
    },

    Status:{

        type: "String",
        enum:["Pending" , "In  Progress" , "Completed"],
        default: "Pending"
    },

    taskPriority:{
        type: "String",
        enum:["low" , "medium" , "high"],
        default: "medium"
    },

 

    attachments:[
    
 
        { fileName: {
                type: "String"
            },

            fileUrl: {
                type: "String",
               
            }
        }
        

    ]


})

const  taskModel =  mongoose.model("task" , taskSchema);
module.exports  =  taskModel;