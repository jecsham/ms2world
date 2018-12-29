const EventEmitter = require('events');
const chalk = require('chalk');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Events

myEmitter.on('server-started', () => {
    console.log(chalk.green('Server started...'));
});

myEmitter.on('mongodb-connected', () => {
    console.log(chalk.green('MongoDB connected'));
});

myEmitter.on('server-ready', () => {
    console.log(chalk.green('Server ready'));
});

module.exports = myEmitter