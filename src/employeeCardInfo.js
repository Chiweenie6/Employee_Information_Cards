// Adds the cards to the html outline below.
const makeCard = (empCard) => {
  // HTML outline for Manager card information.
  const makeManager = (manager) => {
    return `
        <div class="card col d-flex flex-fill justify-content-center p-3 m-5 vw-25" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-success">${manager.getName()}</h5>
                <p class="card-text"><i class="fa-solid fa-chess-king fa-2x"></i><br> ${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-id-badge fa-2x"></i> ${manager.getId()}</li>
                <li class="list-group-item">Office <i class="fa-solid fa-hashtag"></i>: ${manager.getOfficeNumber()}</li>
            </ul>
            <div class="card-body">
                <a href="mailto:${manager.getEmail()}" class="card-link text-info"><i class="fa-regular fa-envelope fa-2x"></i> ${manager.getEmail()}</a>
            </div>
        </div>`;
  };
  // HTML outline for Engineer card information.
  const makeEngineer = (engineer) => {
    return `
        <div class="card col d-flex flex-fill justify-content-center p-3 m-5 vw-25" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-success">${engineer.getName()}</h5>
                <p class="card-text"><i class="fa-solid fa-chess-knight fa-2x"></i><br> ${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-id-badge fa-2x"></i> ${engineer.getId()}</li>
            </ul>
            <div class="card-body">
                <a href="https://github.com/${engineer.getGithub()}" class="card-link text-info"><i class="fa-brands fa-github fa-2x"></i> https://github.com/${engineer.getGithub()}</a>
                <br>
                <br>
                <a href="mailto:${engineer.getEmail()}" class="card-link text-info"><i class="fa-regular fa-envelope fa-2x"></i> ${engineer.getEmail()}</a>
            </div>
        </div>`;
  };
  // HTML outline for Intern card information.
  const makeIntern = (intern) => {
    return `
        <div class="card col d-flex flex-fill justify-content-center p-3 m-5 vw-25" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-success">${intern.getName()}</h5>
                <p class="card-text"><i class="fa-solid fa-chess-pawn fa-2x"></i><br> ${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-id-badge fa-2x"></i> ${intern.getId()}</li>
                <li class="list-group-item"><i class="fa-solid fa-graduation-cap fa-2x"></i> ${intern.getSchool()}</li>
            </ul>
            <div class="card-body">
                <a href="mailto:${intern.getEmail()}" class="card-link text-info"><i class="fa-regular fa-envelope fa-2x"></i> ${intern.getEmail()}</a>
            </div>
        </div>`;
  };

  // Uses a filter to gather the three roles and add them to the team array.
  const team = [];
  team.push(
    empCard
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => makeManager(manager))
      .join("")
  );
  team.push(
    empCard
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => makeEngineer(engineer))
      .join("")
  );
  team.push(
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
    <link rel="stylesheet" href="./styles/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="./styles/reset.css">
    <link rel="stylesheet" href="./styles/style.css">

    <title>Employee Cards</title>
</head>

<body class="container text-center px-4">
    <h1><i class="fa-solid fa-users text-success"></i> Employee Information Cards <i class="fa-solid fa-users text-success"></i></h1>

    <div class="row">

        ${makeCard(empCard)}

    </div>
</body>

</html>
    `;
};
