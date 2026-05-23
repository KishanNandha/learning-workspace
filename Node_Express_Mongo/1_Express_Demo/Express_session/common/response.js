module.exports  = {
successResponse : (response, message, data) => {
    return response.status(200).send({
        message, data
    });
},

errorResponse : (response, message) => {
    return response.status(500).send({
        message
    });
}
,
notFoundResponse : (response, message) => {
    return response.status(404).send({
        message
    });
},
unauthorizedRequest : (response) => {
    return response.status(401).send({
        message:'You are not unauthorized'
    });
}
}