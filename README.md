# Social Network API

## Table of Contents
1. [Description](#description)

2. [Languages/Technologies](#languages-technologies)

3. [License](#license)

4. [Repository URL](#repository-url)

5. [Installation](#installation)

6. [Images](#Images)

7. [Demo/Walkthrough](#demo/walkthrough)

8. [Credits](#credits)

## Description

This project demonstrates the database for a social networking application. Use browser development

tools or an or a REST client application like Insomnia or Postman to test endpoints.

AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia Core for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia Core

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Languages/Technologies

Node.js, Express.js, mongodb, mongoose


## License
MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Repository URL
https://github.com/Mannyalfa/social-network-api

## Installation

(MongoDB should be installed prior to file installation)

Clone Repository

Run the following commands in the CLI:

npm install

npm start

(See installation video under 'Test-Demo' below)


## Images
Dependencies
![screenshot]()

Routes:
![screenshot]()

Starting the server:
![screenshot]()

Ready to test routes
![screenshot]()

## Demo/Walkthrough
Installation:



GET routes to return all users, GET user by ID, update (PUT) user and delete (DEL) users tested in Insomnia Core:



GET routes to return all thoughts, GET thoughts by ID, update (PUT) and delete (DEL) thoughts tested in Insomnia Core:



Add (POST) and delete (DEL) reaction tested in Insomnia Core:



Add (PUT) and delete (DEL) friends from existing users tested in Insomnia Core:


    

## Credits
Manny Alfaro

UCF-VIRT-BO-FSF-PT-04-2021-U-B


### If you have any questions, please contact me: mannyalfa@gmail.com