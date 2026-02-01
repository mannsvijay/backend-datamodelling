import mongoose from "mongoose";

// what should a product have in ecommerce
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    // there are ways to upload image of product but we prefer to upload image in an url way so type would be string
    productImage : {
         type : String,
    },
    price : {
        type : Number,
        default : 0
    },
    stock : {
        type : Number,
        default : 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category",
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true

    }


},{timestamps : true})

export const product = mongoose.model("product",productSchema)