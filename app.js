// function sayHi(name) {
//     console.log('Hi ' + name);

// }
// sayHi('Dolly');

//window not defined as in node we don't have window or document objects.
//in node we have other objects to work with files, with operating system, network etc.
// console.log(window);

// global objects
// console object is a global object.
// global.setTimeout()  is equal to  setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// var name = '';
// console.log(global.name);
// answer will be undefined!

// console.log(module);

// const logger = require('./logger');
// console.log(logger);

// logger.humlog('TumLog');

// when calling just a function from exports i.e in modules we can export single function or an object.
// logger("BhaiLog");

// Path module
// var path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS module
// const os = require('os');
// var totalMem = os.totalmem();
// var freeMem = os.freemem();
// console.log('Total memory: ' + totalMem);
// OR
// Template String
// ES6 : ECMASCRIPT
// console.log(`Total memory:  ${totalMem}`);
// console.log(`Free memory:  ${freeMem}`);

// File system module
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
// fs.readdir('$', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Results', files);
// });

// Https module example 1
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

//personal module example
// var http = require('http');
// var dt = require('./logger');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("the date and time are currently: " + dt.myDateTime());
//     res.end();
//   }).listen(8080);
//  now visit to check whether displayed or not! on :-> http://localhost:8080


// Event module
// here EventEmitter is a class => it is a blueprint what the class should do
// const EventEmitter = require('events');
// instace of class => it is the actual object that we use
// const emitter = new EventEmitter();
// register a listener
// emitter.on('messageLogged', function() {
//     console.log('Listener Called');
// });
// Raising the event
// emitter.emit('messageLogged');
// emit means to make noise or produce something
// this means we are signalling that an event had happened!

// Example
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener Called', arg);
// });
// emitter.emit('messagelogged', { id: 1, url: 'http://' });
// Raise: logging (data: message)


// Example in colab with logger
// const EventEmitter = require('events');
// const Logger = require('./logger');
// const logger  = new Logger();
// logger.on('messageLogged', (arg) => {
//     console.log('Listener Called', arg);
// });
// logger.log('message'); 

// Https module
// const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log('New connection...');
// });
// server.listen(8080);
// console.log('Listening port 8080...');


// Example
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/') {
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url == '/api/courses') {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });

// server.listen(8080);
// console.log('Listening port 8080...');


// Rev 
var http = require('http');
 