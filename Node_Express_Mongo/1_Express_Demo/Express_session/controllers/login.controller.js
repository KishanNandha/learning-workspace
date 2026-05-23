const Response = require('../common/response');
const logger = require('../common/logger');
const Joi = require('joi');
const User = require('../models/user.model');
const session = require('express-session');

const userRegSchema = {
    name :Joi.string().min(3).required(),
    email :Joi.string().email().lowercase().required(),
    password :Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
}

const userLoginSchema = {
    email :Joi.string().email().lowercase().required(),
    password :Joi.string().min(8).required()
}

module.exports = {
    registerUser : (request,response) => {
        const joiResult = Joi.validate(request.body,userRegSchema);

        if(joiResult.error) {
           logger.log(joiResult.error); 
            return Response.errorResponse(response,joiResult.error.message);
        }
        const user = new User(request.body);


        User.findOne({email:request.body.email})
            .then(data => {
                if(data.email) {
                    return   Response.errorResponse(response,'User with email already exists');
                }
                else {
                    user.save()
                    .then(data => {
                        logger.log('user created');
                        return Response.successResponse(response,'user created',data);
                    })
                    .catch(error => {
                        logger.log('user creation failed!!');
                        return Response.errorResponse(response,'user creation failed!!');
                    });
                }
            })
            .catch(error => {
                logger.log(error);
                return Response.errorResponse(response,'user creation failed!!');
            });
    },

    doLogin : (request,response) => {
        const joiResult = Joi.validate(request.body,userLoginSchema);
        
        if(joiResult.error) {
            logger.log(joiResult.error); 
             return Response.errorResponse(response,joiResult.error.message);
         }

         User.findOne({ email : request.body.email, password : request.body.password })
            .then(user => {
                if(user){
                    request.session.user = user;
                    return Response.successResponse(response,'Login success',user);
                }
                else {
                    logger.log('user creation failed!!',error);
                    return Response.notFoundResponse(response,'user not found!!');
                }
            })
            .catch(error => {
                logger.log(error);
                return Response.notFoundResponse(response,error.message);
            })
    },

    logout: (request,response) => {
        request.session.destroy();
        return Response.successResponse(response,'Logout success',{});
    }
}


