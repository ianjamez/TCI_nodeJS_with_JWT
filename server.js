'use strict';

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');
var Cors = require('cors');
var Logger = require('./util/logger');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');


var corsOptions = {};

var App = Express();

var Server = Http.createServer(App);

App.use(Cors(corsOptions));
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(expressJWT({secret:'sprocket'}).unless({path: ['/login']}));
App.use(Swaggerize({
    api: Path.resolve('./config/swagger.json'),
    docspath: '/swagger',
    handlers: Path.resolve('./handlers')
}));
/*App.post('/login', function(req, res){
	if(!req.body.username) {
		res.status(400).send('username?');
		return;
	}
	if(!req.body.password) {
		res.status(400).send('password?');
		return;
	}
	res.stataus(200).json({status: success})	
});*/

Server.listen(8000, function () {
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    Logger.log(Logger.LOG_INFO, `App running on ${this.address().address}:${this.address().port}`);
    /* eslint-disable no-console */
});
