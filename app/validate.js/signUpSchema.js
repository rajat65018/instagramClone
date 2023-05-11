const Joi=require('joi');
const signUpSchema={
    body:{
        name:Joi.string().required().description('User name'),
        email:Joi.string().required().description('User email'),
        password:Joi.string().required().description('User Password')
    }
}
module.exports=signUpSchema;