var bunyan = require("bunyan"),
    level = process.env.LOG_LEVEL || 'trace';

var logger = bunyan.createLogger({
  name: 'acme_bowling',
  streams: [
    {
      // level: trace - give all script output and contents of all messages sent and received. OVERKILL
      // level: debug - same as trace minus script output and reduced message content
      // level: info - an appropriate amount of information for PRODUCTION
      // level: warn - if you don't want to ever clean the logs up. NOT RECOMMENDED
      // level: error - only show the errors
      level: level,
      stream: process.stdout
    }
    /* NSSM will redirect output to a file for me, but just in case:
    {
      level: 'error',
      path: '/var/tmp/myapp-error.log'  // log ERROR and above to a file
    }
    */
  ]
});

exports.logger = logger;