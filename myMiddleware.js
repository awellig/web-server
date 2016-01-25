/*
 * My middleware for Express
 */
module.exports = {

    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    
    logger: function (req, res, next) {
        console.log('Request: ' + req.method + ',' + req.originalUrl + ' \t@' + new Date().toUTCString());
        next();
    }
}