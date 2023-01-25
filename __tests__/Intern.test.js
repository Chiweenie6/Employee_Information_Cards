const Intern = require("../lib/Intern");

// Test to make sure the Intern.js file is working correctly. 
describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create new Intern with name, id, email", () => {
            const name = "Bob";
            const id = 1;
            const email = "Bob1@gmail.com";
            const newEmployee = new Intern(name, id, email);

            expect(newEmployee instanceof Intern).toBe(true);
            expect(newEmployee.name).toEqual("Bob");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("Bob1@gmail.com");
        });
    });
});