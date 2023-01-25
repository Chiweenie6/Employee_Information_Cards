const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create new employee with name, id, email", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Employee(name, id, email);

            expect(newCharacter instanceof Character).toBe(true);
            expect(newCharacter.name).toEqual("Bob");
            expect(newCharacter.id).toEqual(1);
            expect(newCharacter.email).toEqual("Bob1@gmail.com");
        });
    });

    describe("getName", () => {
        it("Should return the employee's name", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Employee(name, id, email);

            const info = newEmployee.getName();

            expect(info).toEqual("Bob");
        });
    });

    describe("getId", () => {
        it("Should return the employee's id", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Employee(name, id, email);

            const info = newEmployee.getId();

            expect(info).toEqual("1");
        });
    });

    describe("getEmail", () => {
        it("Should return the employee's email", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Employee(name, id, email);

            const info = newEmployee.getEmail();

            expect(info).toEqual("Bob1@gmail.com");
        });
    });

    describe("getRole", () => {
        it("Should return the employee's role in the company", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Employee(name, id, email);
            const role = "Employee";

            const info = newEmployee.getRole();

            expect(info).toEqual("Employee");
        });
    });
});