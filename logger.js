/*
console.log(__filename);
console.log(__dirname);
var url = 'https://mylogger.io/log';

function log(message) {
    console.log(message);
}

module.exports = log;*/
// module.exports.log = log;
// exports.log = log;
// exports = log;

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';
class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('messageLogged', { id: 1, url: 'http://'})
    }
}

module.exports = Logger;