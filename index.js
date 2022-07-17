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
        choices: ["MIT License Copyright (c) 2022 Annie Hosch Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
                    "other",
                    "another other"]
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
    const htmlString = `
                        <!DOCTYPE html>
                        <html lang="en">
                        
                        <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content = "IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>README</title>>
                        </head>

                        <body>
                        <h1>${answers.title}</h1>

                            <h2>Description</h2>
                            <p>${answers.description}</p>

                            <h2>Table of Contents</h2>
                            <p>
                            - [Installation](#installation)
                            - [Usage](#usage)
                            - [Credits](#credits)
                            - [License](#license)
                            </p>
                            
                            <h2>Installation</h2>
                            <p>${answers.installation}</p>

                            <h2>Usage</h2>
                            <p>${answers.usage}</p>

                            <h2>Liscense</h2>
                            <p>${answers.liscense}</p>
                           
                            <h2>Contributing</h2
                            <p>${answers.contribute}</p>

                            <h2>Tests</h2>
                            <p>${answers.test}</p>

                            <h2>Questions</h2>
                            <pre>Have any questions?
                                github.com/${answers.questions}  
                                Additional questions can be sent to the following address: ${answers.questions2}
                            </pre>
                        </body>
                        </html>
    `
    fs.writeFile(`./output/${answers.title}.md`, htmlString, (err) => err ? console.error(err) : console.log('success!'));
})