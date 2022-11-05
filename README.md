# magical_soup
  ## Description
  Magical Blog is an online blog app that allows users to post comments about any topic and reply to each others comments. In this application the user can create multiple comments on their own or respond to others comments, and edit these comments.
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
This application is distributed under the [MIT](https://opensource.org/licenses/MIT) license.
  ## Table of contents
  - [License](#License)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Tests](#Tests)
  - [Contributions](#Contributions)
  ## Usage
  To create a comment, first you must create a account which will be the login tab in the navbar. Users can also signout and back out to the login page at anytime by using the navbar logout link. After creating an account the user will be brought to the dashboard where they will be given the option to create a new comment. After creating an comment, users can see it on their dashboard, and delete or update these comments. Users can also respond to different accounts in the home screen.

  ## Installation
  The user simply needs to use the [heroku](google.com) website to access the web application and create an account. Then, they can create their own comments immediately to their own criteria. The home screen should look something like this once you've logged in and created a comment:
  ![2022-11-04 (3)](https://user-images.githubusercontent.com/112971337/200097911-68061281-5f1d-4ac5-88e9-c9cfabf1a0bb.png)

  
  If the user wants to run the application on their local machine this application requires npm package dependencies. To run this application locally on your computer, in your terminal command line, run:

  ```
  npm install.
  ```
   In order to access the database you will need to establish an environment variable file ```.env``` in the root of your file system. Attached to this application will be a ```.env.SAMPLE``` folder that you can replace DB_PW='YOUR PASSWORD'. 
   
   Next, you will need to source the SQL database, in your terminal command line, run: 
   ```
   my sql -uroot -p
   ``` 
   and enter your SQL login credentials. Once logged in, run: 
   ```
   source db/schema.sql
   quit
   ```
  Once you have sourced the schema.sql run: 
  ```
  node seeds/index.js
  npm start
  ``` 
 Once the application is launched, you will be able to access the application at http://localhost:3001/

  ## Tests
  N/A

  ## Contributors
  Contributors: Jordan Heath
