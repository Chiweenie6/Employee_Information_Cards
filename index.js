const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
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
          choices: ["Manager", "Engineer", "Intern", "Organize employees"],
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
          message: "What is the manager's name?",
          validate: (input) => {
            if (input === "") {
              return "You must enter a name.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's id?",
          validate: (input) => {
            if (input === "") {
              return "You must enter an id.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
          validate: (email) => {
            const mailCheck =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(mailCheck)) {
              return true;
            }
            return "You must enter a valid email.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
          validate: (phoneNumber) => {
            const phone = phoneNumber.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (phone) {
              return true;
            }
            return "You must enter a valid phone number.";
          },
        },
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
          message: "What is the engineer's name?",
          validate: (input) => {
            if (input === "") {
              return "You must enter a name.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
          validate: (input) => {
            if (input === "") {
              return "You must enter an id.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: (email) => {
            const mailCheck =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(mailCheck)) {
              return true;
            }
            return "You must enter a valid email.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
          validate: (input) => {
            if (input === "") {
              return "You must enter a GitHub username.";
            }
            return true;
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(
          answer.engineerName,
          answer.engineerId,
          answer.engineerEmail,
          answer.engineerGithub
        );
        employeeCards.push(engineer);
        employeeInfo();
      });
  };

  const makeIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (input) => {
            if (input === "") {
              return "You must enter a name.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
          validate: (input) => {
            if (input === "") {
              return "You must enter an id.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          validate: (email) => {
            const mailCheck =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(mailCheck)) {
              return true;
            }
            return "You must enter a valid email.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
          validate: (input) => {
            if (input === "") {
              return "You must enter a school name.";
            }
            return true;
          },
        },
      ])
      .then((answer) => {
        const intern = new Intern(
          answer.internName,
          answer.internId,
          answer.internEmail,
          answer.internSchool
        );
        employeeCards.push(intern);
        employeeInfo();
      });
  };

  const organizeEmployees = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, empCardInfo(employeeCards), "utf-8");
    console.log("Team! Assemble! 😁");
  };

  employeeInfo();
};

beginQuestions();
