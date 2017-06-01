// var obj = {
//     name: "Andrew"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
//
// console.log(stringObj);

// var personString = '{"name":"fahad", "age":33}';
// var result = JSON.parse(personString);
// console.log(result);
// console.log(typeof result);

const fs = require('fs');

var orginalNote = {
    title: 'Some title',
    body: 'Some Body'
};

var orginalNoteString = JSON.stringify(orginalNote);

fs.writeFileSync('notes.json', orginalNoteString);

console.log("Written to file....");

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString)

console.log(note.title);

