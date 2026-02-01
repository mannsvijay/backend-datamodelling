import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    disease : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    bloodGroup : { // we can also give enum as well as we know all blood groups
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : ["MALE" , "FEMALE" , "OTHERS"],
        required : true
    },
    addmittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "hospital"
    }
},{timestamps : true})

export const patient = mongoose.model("patient" , patientSchema)