var EventEmitter = require('events').EventEmitter;

var dispatcher = new EventEmitter();

dispatcher.on('connect', function (data) {
    console.log('Connect 1', data);
});


// dispatcher.on('error', function (data) {
//     console.log('Error!');
// });

dispatcher.on('connect', function (data) {
    console.log('Connect 2', data);
});

dispatcher.emit('error', new Error('Something went wrong!'));
dispatcher.emit('connect', {foo: 1});