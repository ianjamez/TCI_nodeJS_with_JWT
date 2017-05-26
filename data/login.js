'use strict';
var Mockgen = require('./mockgen.js');
var jwt = require('jsonwebtoken');
/**
 * Operations on /login
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: username, password
     * produces: application/json
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {

            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             return callback(res.stataus(200).json({}));*/

            var name = req.query.name || 'stranger';
            var hello = 'Hello, '+name;
            var myToken = jwt.sign({ username: req.query.username }, 'sprocket');

            return callback(res.json(myToken));
            /*Mockgen().responses({
                path: '/test/me',
                operation: 'post',
                response: '200'
            }, callback);*/
        }
    }
};
