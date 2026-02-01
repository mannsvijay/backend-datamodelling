import mongoose, { mongo } from "mongoose";

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    experienceInYears : {
        type : Number,
        default : 0
    },
    worksInHospitals : [
        {
         type : mongoose.Schema.Types.ObjectId,
         ref : "hospital"
        }
    ]

},{timestamps : true})

export const doctor = mongoose.model("doctor" , doctorSchema )