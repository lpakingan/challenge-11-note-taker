// import packages required for html router
const path = require('path');
const htmlRouter = require('express').Router();

// get redirects to the /notes page or homepage
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// exports the html router
module.exports = htmlRouter;