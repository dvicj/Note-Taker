# Note Taker

Hello, and welcome to my README! This is for my Week 11 Challenge, which was to create a Note Taking app using Express.js. I learned a lot while doing this, and I am happy to be able to share my experience with you.

[Note Taker](https://guarded-thicket-25037.herokuapp.com/)

![finished html](https://github.com/dvicj/Note-Taker/blob/master/public/assets/images/Note-Taker.png)


It was my job to ensure my Note Taking app had the following features:

- GET /notes - returns the notes.html file
- GET * - returns the index.html file
- GET /api/notes - reads the db.json file and returns all saved notes as JSON
![api notes](https://github.com/dvicj/Note-Taker/blob/master/public/assets/images/api%20notes.PNG)
- POST /api/notes - sends a new note and saves to db.json file 
- deploy the application to Heroku 
- BONUS: DELETE /api/notes/:id - delete note with a given id 

I was to create this Note Taker app, and meet all of the requirements listed above, by using:

- [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming#:~:text=Object%2Doriented%20programming%20(OOP),(often%20known%20as%20methods).)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Insomnia Core](https://insomnia.rest/download/)
- JavaScript - ES6
- HTML 
- CSS

I completed this project as a way to further test my JavaScript skills with a focus on DRY and easy to read code. 

Features:

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Learning](#learning)
* [License](#license)

## Installation

The user must clone all filed from this repo. It is important that the location of the files is not changed. 

![files](https://github.com/dvicj/Note-Taker/blob/master/public/assets/images/files.PNG)

1. If the user would like to run the server locally: 

- The user must have [Node.js](https://nodejs.org/en/download/) installed on their computer. 

- Then, the user must download Express.js by entering "npm install "express"". This will allow the user to run the application locally. To run the server, user must enter "node server.js" or "npm start" to start the server. The server can then be opened on any browser on "localhost:3000". 
2. If the user would like to open the application on any web browser: 

- The app is also deployed on [Heroku](https://guarded-thicket-25037.herokuapp.com/), and can be accessed from anywhere. 

## Usage
Here are some user experience highlights from my page:

- the landing page has a button which will bring the user to a notes page
- the notes page has the existing notes saved on the left side of the page, which can be deleted
- when a saved note is clicked on, it will be appear in the right hand column again

## Credits
These are some sources I used to help me along:

- [Express.js](https://expressjs.com/)

- [Node.js](https://nodejs.org/en/download/)

- [Insomnia Core](https://insomnia.rest/download/)


## Learning
Here are the highlights of what I learned and issues I had while writing this code.

I really enjoyed how clean and simple the code ended up being. I found it much easier to understand and write than JavaScript code in the past. Breaking up the javascript into seperate files helped to make the code easy to understand and more modular. 

I liked using Heroku and Insomnia, I look forward to using them more in the future.

I'm not sure if the delete function is working properly, but I gave it a shot. 

## License
MIT License

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)

Copyright (c) 2021 Devin Jones

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.








