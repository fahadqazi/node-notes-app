console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(process.argv);  //argv = arguments vector

var command = process.argv[2];

if (command === 'add'){
    console.log('Adding new note')
} else if (command === 'list'){
    console.log('Listing all notes')
} else if (command === 'read'){
    console.log('Reading note')
} else if (command === 'remove'){
    console.log('Removing note')
} else {
    console.log('Cgiommand not found');
}