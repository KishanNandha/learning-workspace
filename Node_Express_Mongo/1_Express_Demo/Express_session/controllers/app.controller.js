const Response = require('../common/response');

module.exports = {
    homePage : (request,response) => {
        console.log(request.sessionId);
        Response.successResponse(response,'Welcome',{sessionId: request.sessionId});
    }
}