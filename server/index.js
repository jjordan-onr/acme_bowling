"use strict"

var restify = require('restify');
var Bowling = require('./bowling.js');
var log = require('./logger.js').logger;

function isObject(obj) {
    return obj === Object(obj);
}

// Format the message before sending the response
function sendResponse(err, data, response){
	if(err){
		var errorCode = err.code || 400;
        var errorData = {"error": err.message};
		response.writeHead(errorCode, {"Content-Type": "application/json"});
		response.write(JSON.stringify(errorData));
		response.end();
	}
	else{
		response.writeHead(200, {"Content-Type": "application/json",
                                  "Access-Control-Allow-Origin": "*",
                                  "Access-Control-Allow-Headers": "X-Requested-With"});
		if(isObject(data)){
            response.write(JSON.stringify(data));
        }
		else{
            response.write(data);
        }
		response.end();
	}
}

// Instantiate the Bowling thing
var bowling = new Bowling('gameData');

// Make Restify happy
var server = restify.createServer();
server
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.queryParser());
    
/**
 * Begin routing functions
 */ 

// Get information about this service (to see if it's running, etc.)
server.get('/check', function(req, res, next){
    log.debug('index.js: Getting service info');
    var data = {
        "appName": "bowling"
    };
    sendResponse(null, data, res);
});

// Get game data
server.get('/bowlers/:bowlerName/stats', function(req, res, next){
    log.debug('index.js: Getting bowler stats');
    var data = bowling.getStats(req.params.bowlerName);
    sendResponse(null, data, res);
});

// Add game data
server.post('/games', (req, res, next) => {
    log.debug(`index.js: Adding game data`);
    //redis.setHostEntry(req.params.customerName, req.body, (err, data) => {
    //    sendResponse(err, data, res);
    //});
});

/**
 * End routing functions
 */

// Start the server
server.listen(8080, function() {
    log.info('server.js: listening on %s', server.url);
});