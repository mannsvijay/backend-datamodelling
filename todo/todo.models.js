import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content :  {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false,
    },
    createdBy : { // no we have to connect it w user.models.js
        type : mongoose.Schema.Types.ObjectId,
        ref : "user" , // the name we saved it in export in user.models.js
    },
     // array of subtodos
    subTodos : [ //now we connect subtodos   
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "subtodo"
        }
    ]
},{timestamps : true })

export const todo = mongoose.model("todo" , todoSchema) 

