# Bootcamp Challenge #11: Note Taker Using Express.js

## Summary of the Challenge

In this week's challenge, we were tasked with creating a note taker application that could be used to write and save notes. The application uses an Express.js back end that saves and retrieves note data from a JSON storage file. 

## Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation
For this application, no installation is necessary if accessing through the Heroku deployed application link: https://note-taker-challenge-lp-03a94b15bcb1.herokuapp.com/.
If run from the terminal command line, **node.js** is necessary for running the application locally. The **express** package for node is also required and can be installed using the npm installer.

## Usage
To use the application, either access it through the Heroku link or run locally using node.js. When on the notes page, the user is able to add new notes and see their already stored notes upon loading in. If the user would like to remove notes,
they may do so by clicking the Trash icon next to any saved note. The saved notes will be dynamically updated upon each post/delete request by the user. 

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- [Express Documentation](https://expressjs.com/)
- [node.js Documentation](https://nodejs.org/en/docs)
- [Heroku Documentation](https://devcenter.heroku.com/categories/reference)


## Deployed Application
The final deployed webpage can be found [here](https://note-taker-challenge-lp-03a94b15bcb1.herokuapp.com/).
