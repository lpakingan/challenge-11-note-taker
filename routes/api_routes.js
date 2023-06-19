// packages required for api route
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
notesRouter = require('express').Router();

// get all saved notes in JSON format from db.json
notesRouter.get('/notes', (req, res) => {
    console.info('--------------');
    console.info(`GET request received to load your saved notes`);
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, notes) => {
        if (error) {
            console.error(error);
        } else {
            storedNotes = JSON.parse(notes);
            res.json(storedNotes);
            console.info('Notes loaded successfully!')
        }
    });
});


// add a new note to db.json through the POST method
notesRouter.post('/notes', (req, res) => {
    console.info('--------------');
    console.info('POST request received to add a note to your notes');

    // two inputs from user: note title and note content
    const { title, text } = req.body;

    // if inputs received, create newNote constant to add to db.json
    // on top of user input, a unique ID is generated for the new Note
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
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
            error ? console.error(error) : console.info(`Successfully added note!\nID: ${newNote.id}\nTitle: ${newNote.title}\nText: ${newNote.text}\nYour notes will be updated shortly!`)
            );

            res.json(notesStorage);

            }
        });
    };
});

// delete a note from the list/db.json by using the DELETE method
notesRouter.delete('/notes/:id', (req, res) => {
    console.info('--------------')
    // read the existing notes from the db.json file
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, storedNotes) => {
        if (error) {
            console.error(error);
        } else {
            // parses through the notes storage and filters through the notes to find the matching id of the note that is to be deleted; returns that note in an array
            const notesStorage = JSON.parse(storedNotes);
            let findNote = notesStorage.filter(deletedNote => deletedNote.id == req.params.id);
            // the note is removed from the array using .pop() and its index found
            let deletedNote = findNote.pop();
            let noteIndex = notesStorage.indexOf(deletedNote);
            // the note to be removed is then spliced from the notes storage and the updated notes are returned
            notesStorage.splice(noteIndex, 1);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesStorage, null), (error) => 
            error ? console.error(error) : console.info(`Successfully deleted note with ID ${deletedNote.id}!\nYour notes will be updated shortly!`)
            );

            res.json(notesStorage);

            }
        });
    });

// export the api router
module.exports = notesRouter;
