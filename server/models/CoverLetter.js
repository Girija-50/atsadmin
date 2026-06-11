import mongoose from "mongoose";

const coverLetterSchema =
new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

name:String,

role:String,

email:String,

phone:String,

company:String,

hiringManager:String,

jobTitle:String,

content:String,

createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.model(
"CoverLetter",
coverLetterSchema
);