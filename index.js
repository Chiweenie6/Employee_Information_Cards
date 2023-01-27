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

  };

  const makeEngineer = () => {

  };

  const makeIntern = () => {

  };

  const organizeEmployees = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, empCardInfo(employeeCards), "utf-8");
  };

  employeeInfo();
};

beginQuestions();
