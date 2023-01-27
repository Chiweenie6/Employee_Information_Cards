const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const empCardInfo = require("./src/employeeCardInfo");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

console.log("Enter employee information below.");

const employeeCards = [];

const beginQuestions = () => {
  const employeeInfo = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "What is this employee's role?",
          choices: ["Manager", "Engineer", "Intern", "No more employees"],
        },
      ])
      .then((input) => {
        switch (input.role) {
          case "Manager":
            makeManager();
            break;
          case "Engineer":
            makeEngineer();
            break;
          case "Intern":
            makeIntern();
            break;
          default:
            organizeEmployees();
        }
      });
  };

  const makeManager = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's id?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
      }
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.managerOfficeNumber
      );
      employeeCards.push(manager);
      employeeInfo();
    });
  };

  const makeEngineer = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
      }
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }
    ]);
  };

  const makeIntern = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's id?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
      }
      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }
    ]);
  };

  const organizeEmployees = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, empCardInfo(employeeCards), "utf-8");
    console.log("Yeah! 😁");
  };

  employeeInfo();
};

beginQuestions();
