console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
const command = argv._[0]
// console.log('Process: ', process.argv);  //argv = arguments vector
console.log('Yargs: ', argv);
console.log("You called the function: ", argv._[0])


if (command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('Command not found');
}