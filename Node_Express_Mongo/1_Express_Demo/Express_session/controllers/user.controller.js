const Response = require('../common/response');
const session = require('express-session');

module.exports = {
    dashboard : (request,response) => {
        if(request.session.user){
            Response.successResponse(response,'Welcome',{});
        } 
        else {
            Response.unauthorizedRequest(response);
        }
    }
}