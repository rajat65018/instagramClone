const userModel = require("../models/userModel");

const userServices={};
userServices.createUser=async(payload)=>{
    return await new userModel(payload).save();
}
userServices.findOneUser=async(searchQuery,projectionQuery)=>{
    return userModel.findOne(searchQuery,projectionQuery);
}
module.exports=userServices;