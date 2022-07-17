const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: "title",
        message: "What is your project called?",
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
        name: "credits",
        message: "List collaborators and tutorials followed!",
        type: "input"
    },
    {
        name: "liscense",
        message: "We'll include a liscense later...",
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

                            <h2>Installation</h2>
                            <p>${answers.installation}</p>

                            <h2>Usage</h2>
                            <p>${answers.usage}</p>

                            <h2>Credits</h2>
                            <p>${answers.credits}</p>

                            <h2>Liscense</h2>
                            <p>${answers.liscense}</p>
                        </body>
                        </html>
    `
    fs.writeFile(`./output/${answers.title}.md`, htmlString, (err) => err ? console.error(err) : console.log('success!'));
})