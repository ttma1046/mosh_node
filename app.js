/*console.log();

setTimeout();

clearTimeout();

setInterval();

clearInterval();

window.console.

global.console.log
*/
/*
const log = require('./logger.js');

log('Hello World!');

const path = require('path');
 
var pathObj = path.parse(__filename);

console.log(pathObj);

*/
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');