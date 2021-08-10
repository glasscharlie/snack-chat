# snackChat (UW Coding Bootcamp Group Project 2)

This application is a group project mock-up of a social media application in which the user can log in or create an account, upload photos of restaurant food, post a description or review, and follow/unfollow other users. The app is written using several JavaScript packages, including Handlebars.js, Express.js API, and bcrypt. The database information is managed by Sequelize to interact with a MySQL database and tested with Insomnia. Front end styling was accomplished with a light grid framework from Pure CSS and a custom stylesheet.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

  1. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contribution](#contribution)
  6. [Testing](#testing)
  7. [Questions](#questions)
  8. [License](#license)
  
## Description

snackChat is a simple photo-sharing application allowing the user to share photos and follow other users. We've deployed this application through both GitHub and Heroku. The user interacts with the application through their browser, while JavaScript and MySQL handle the backend.

## Installation

This project uses MySQL, sequelize, node Express and npm. Install these packages if you do not have them on your local machine. 

## Usage

``schema.sql`` must be sourced through the MySQL prompt prior to launching the application. Use ``npm run seed`` to then seed the generated database in the command line, then  ``node .\index.js`` to launch this application. We used [Insomnia](https://insomnia.rest/) to visualize, test and troubleshoot front- and back-end API routes.

## Contribution

Pleae feel free to contribute and always follow the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/):

* Fork the reposition
* Create a new branch (``git checkout -b improve-feature``)
* Make, add and commit the appropriate changes in the files
* Push to the branch (``git push origin improve-feature``)
* Create a Pull Request

Thanks!

## Testing

Testing of code was conducted in Insomnia and in-browser; error messages were parsed there and in the VS Code command line.

## Questions

Please don't hesitate to reach out to us via GitHub or email if you've got any questions! Thank you for checking out our app.

* Charles - [GitHub Profile](https://github.com), [Email](mailto:rangamboa@gmail.com)
* Jose - [GitHub Profile](https://github.com), [Email](mailto:rangamboa@gmail.com)
* Marcos - [GitHub Profile](https://github.com), [Email](mailto:rangamboa@gmail.com)
* Ran - [GitHub Profile](https://github.com/rangamboa), [Email](mailto:rangamboa@gmail.com)

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
@2021 Charles Glass, Jose Benicio, Marcos Trejo & Ran Gamboa.