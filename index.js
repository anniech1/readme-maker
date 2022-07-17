const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: "title",
        message: "What is your project entitled?",
        type: "input"
    },
    {
        name: "description",
        message: "Give a short description of your work!",
        type: "input"
    },
    {
        name: "installation",
        message: "Provide an explanation of the steps required to install your project.",
        type: "input"
    },
    {
        name: "usage",
        message: "Write instructions for use. Include deployed screenshots in this section as well.",
        type: "input"
    },
    {
        name: "contribute",
        message: "List collaborators and tutorials followed!",
        type: "input"
    },
    {
        name: "test",
        message: "Fill in test instructions.",
        type: "input"
    },
    {
        name: "license",
        message:"Which is your preferred liscense?",
        type:"checkbox",
        choices:["MIT", "other", "another other"]
    },
    {
        name: "questions",
        message: "What is your Github username?",
        type: "input"
    },
    {
        name: "questions2",
        message: "What is your email address?",
        type: "input"
    }
]).then(answers => {
    console.log(answers)
    const README = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# ${answers.title}
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Liscense
MIT License Copyright (c) 2022 Annie Hosch Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                           
## Contributing
${answers.contribute}

## Tests
${answers.test}

## Questions
Have any questions?
github.com/${answers.questions}  
Additional questions can be sent to the following address: ${answers.questions2}                 
    `
    fs.writeFile(`./output/${answers.title}.md`, README, (err) => err ? console.error(err) : console.log('success!'));
})