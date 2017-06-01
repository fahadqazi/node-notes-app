console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('adding note ...', title, body);
};

var getAll = () => {
    console.log("Getting all notes")
}

var getNote = (title) => {
    console.log('Getting title...', title)
}

var removeNote = (title) => {
    console.log('Removing note...', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};