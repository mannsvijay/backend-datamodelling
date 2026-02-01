import mongoose from "mongoose"

// what does user should have in ecommerce
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true,
        lowercase : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
    },



},{timestamps : true})


export const user = mongoose.model("user" , userSchema)
 