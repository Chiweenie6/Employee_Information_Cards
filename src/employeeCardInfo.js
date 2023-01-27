// Adds the cards to the html outline below.
const makeCard = (empCard) => {
    // HTML outline for Manager card information.
    const makeManager = (manager) => {
        return `
        <div class="card col d-flex justify-content-center p-3 m-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <p class="card-text">${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.getId()}</li>
                <li class="list-group-item">${manager.getOfficeNumber()}</li>
                <li class="list-group-item"></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">${manager.getEmail()}</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>`;
    };
// HTML outline for Engineer card information.
    const makeEngineer = (engineer) => {
        return `
        <div class="card col d-flex justify-content-center p-3 m-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <p class="card-text">${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">${engineer.getEmail()}</a>
                <a href="#" class="card-link">${engineer.getGithub()}</a>
            </div>
        </div>`;
    };
// HTML outline for Intern card information.
    const makeIntern = (intern) => {
        return `
        <div class="card col d-flex justify-content-center p-3 m-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <p class="card-text">${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">${intern.getSchool()}</li>
                <li class="list-group-item"></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">${intern.getEmail()}</a>
                <a href="#" class="card-link"></a>
            </div>
        </div>`;
    };

    // Uses a filter to gather the three roles and add them to the team array.
    const team = [];
    team.push (
        empCard
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => makeManager(manager))
            .join("")
    );
    team.push (
        empCard
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => makeEngineer(engineer))
            .join("")
    );
    team.push (
        empCard
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => makeIntern(intern))
            .join("")
    );
    return team.join("");
};

// Containes the html outline for the webpage and exports it.
module.exports = (empCard) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles/css/brands.min.css">
    <link rel="stylesheet" href="./styles/css/fontawesome.min.css">
    <link rel="stylesheet" href="./styles/css/solid.min.css">
    <link rel="stylesheet" href="./styles/reset.css">
    <link rel="stylesheet" href="./styles/style.css">

    <title>Employee Cards</title>
</head>

<body class="container text-center overflow-hidden px-4">
    <h1>Employee Information Cards</h1>

    <div class="row">

        ${makeCard(empCard)};

    </div>
</body>

</html>
    `;
}