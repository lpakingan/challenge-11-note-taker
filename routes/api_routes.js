// packages required for api route
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
notesRouter = require('express').Router();

// get all saved notes in JSON format from db.json
notesRouter.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, notes) => {
        if (error) {
            console.error(error);
        } else {
            storedNotes = JSON.parse(notes);
            res.json(storedNotes);
        }
    });
});


// add a new note to db.json through the POST method
notesRouter.post('/notes', (req, res) => {
    console.info('POST request received to add a note to your notes');

    // two inputs from user: note title and note content
    const { noteTitle, noteContent } = req.body;

    // if inputs received, create newNote constant to add to db.json
    // on top of user input, a unique ID is generated for the new Note
    if (noteTitle && noteContent) {
        const newNote = {
            noteTitle,
            noteContent,
            noteID: uuidv4()
        };

    // read the existing notes from the db.json file that stores them
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, storedNotes) => {
        // if there is an error, throw an error to the user
        if (error) {
            console.error(error);
        // if the file is successfully read, parse through stored notes, push the new note, and rewrite file
        } else {
            const notesStorage = JSON.parse(storedNotes);

            notesStorage.push(newNote);

            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesStorage, null), (error) => 
            error ? console.error(error) : console.info('Added note!')
            );

            res.json(notesStorage);

            }
        });
    };
});

module.exports = notesRouter;
