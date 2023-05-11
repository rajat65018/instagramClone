const express=require('express');
const validateJoiSchema = require('../middleware/validate');
const signUpSchema = require('../validate.js/signUpSchema');
const loginSchema = require('../validate.js/loginSchema');
const router=express.Router();
router.post('/singup',validateJoiSchema(signUpSchema));
router.get('/login',validateJoiSchema(loginSchema));
module.exports=router;