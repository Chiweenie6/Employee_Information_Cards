const inquirer = require("inquirer");
const fs = require("fs");
const path =require("path");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");






console.log("Let's begin");




const beginQuestions = () => {
    function employeeInfo() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "role",
                message: "What is this employee's role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }
        ])
        .then((response) => {
            switch (response.role) {
                case "Manager":
                    includeManager();
                    break;
                default:
                    organizeEmployees();    
            }
        });
    }
}


const organizeEmployees = () => {
    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, )
}

beginQuestions();