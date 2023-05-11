const Joi=require('joi');
function validateJoiSchema(schema){
    return (req,res,next)=>{
        if(schema.body){
            const result =Joi.object(schema.body).validate(req.body);
            if(result.error){
                return res.json({messages:result.error.message});
            }
            next();
        }
        if(schema.headers){
            const result=Joi.object(schema.headers).validate(req.headers);
            if(result.error){
                return res.json({messages:result.error.message});
            }
            next();
        }
    }
}
module.exports=validateJoiSchema;