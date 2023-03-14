//Module wrapper function: 
// (function (exports, require, module, __filename, __dirname) {

// console.log(__filename);
// console.log(__dirname);

// var url = 'http://logger.io/log';

// function log(message) {
    // send https request
    // console.log(message);
// }

// module.exports.method(method name can be aything) = function
// module.exports.humlog = log;
// when we want to export only a single function instead of the whole object
// we can eleminare method vala part eg: 
// module.exports = log;
// })

// (function (exports, require, module, __filename, __dirname) {var x = 12;});
// this is an immediately invoked function expression


// exports.myDateTime = function () {
//     return Date();
//   };

const EventEmitter = require('events');
 
var url = 'http://heylogger.io/log';
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        // Raise an event
        this.emit('messagelogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;