'use strict';
var Mockgen = require('../mockgen.js');
var jwt = require('jsonwebtoken');

/**
 * Operations on /test/me
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: name
     * produces: application/json
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            return callback('{"response":"hello '+req.query.name+'"}');
            /*Mockgen().responses({
                path: '/test/me',
                operation: 'get',
                response: '200'
            }, callback);*/
        }
    }
};
