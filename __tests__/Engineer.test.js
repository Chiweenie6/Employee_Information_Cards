const Engineer = require("../lib/Engineer");

// Test to make sure the Engineer.js file is working correctly.
describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create new Engineer with name, id, email", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Engineer(name, id, email);
      // Assert
      expect(newEmployee instanceof Engineer).toBe(true);
      expect(newEmployee.name).toEqual("Bob");
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.email).toEqual("Bob1@gmail.com");
    });
  });
});
