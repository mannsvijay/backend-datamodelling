import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
    // we can write data like this or that way
    //  username : String,
    //  email : String,
    //  isActive : Boolean
    username : {
        type :  String,
        required : true,
        unique : true,
        lowercase : true
       },
       email : {
        type :  String,
        required : true,
        unique : true,
        lowercase : true
       },
       password : {
        type :  String,
        // required : [true , "password is required nigga"]
        required : true
       }
    }, {timestamps : true} // to know when user is created and updated
)

export const user = mongoose.model("user" , userSchema)
