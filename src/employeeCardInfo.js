const makeCard = (empCard) => {
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
                <li class="list-group-item">${manager.getEmail()}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>`;
    };

    const makeEngineer = (engineer) => {

    };
};

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