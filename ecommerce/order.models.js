import mongoose, { mongo } from "mongoose";
import { product } from "./product.models";

// how many order items has product and its quantity
const orderItemsSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        required : "product"
    },
    quantity : {
        type : Number,
        default : 1,
        required : true
    }

})

// what order require 
const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        required : "user"
    },
    // now we dont know how much items each user orders so we 
    // create a new schema just to track order items 
    // and for this orderItems we just put array of orderItemsSchema
    orderItems : { 
        type : [orderItemsSchema]
    },
    address : {
        type : String,
        required : true
    },

    status : {
        type : String,
        enum : ["PENDING", "CANCELLED" ,"DELIVERED"], // with enums we can choose only from these
        default : "PENDING"  
    }  


},{timestamps : true})

export const order = mongoose.model("order", orderSchema)