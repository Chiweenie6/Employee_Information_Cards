const Manager = require("../lib/Manager");

// Test to make sure the Manager.js file is working correctly.
describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create new Manager with name, id, email", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Manager(name, id, email);
      // Assert
      expect(newEmployee instanceof Manager).toBe(true);
      expect(newEmployee.name).toEqual("Bob");
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.email).toEqual("Bob1@gmail.com");
    });
  });
});
