const Employee = require("../lib/Employee");

// Test to make sure the Employee.js file is working correctly.
describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create new employee with name, id, email", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Employee(name, id, email);
      // Assert
      expect(newEmployee instanceof Employee).toBe(true);
      expect(newEmployee.name).toEqual("Bob");
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.email).toEqual("Bob1@gmail.com");
    });
  });

  // Test to make sure the getName() is working correctly.
  describe("getName", () => {
    it("Should return the employee's name", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Employee(name, id, email);
      const info = newEmployee.getName();
      // Assert
      expect(info).toEqual("Bob");
    });
  });

  // Test to make sure the getId() is working correctly.
  describe("getId", () => {
    it("Should return the employee's id", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Employee(name, id, email);
      const info = newEmployee.getId();
      // Assert
      expect(info).toEqual(1);
    });
  });

  // Test to make sure the getEmail() is working correctly.
  describe("getEmail", () => {
    it("Should return the employee's email", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      // Act
      const newEmployee = new Employee(name, id, email);
      const info = newEmployee.getEmail();
      // Assert
      expect(info).toEqual("Bob1@gmail.com");
    });
  });

  // Test to make sure the getRole() is working correctly.
  describe("getRole", () => {
    it("Should return the employee's role in the company", () => {
      // Arrange
      const name = "Bob";
      const id = 1;
      const email = "Bob1@gmail.com";
      const role = "Employee";
      // Act
      const newEmployee = new Employee(name, id, email);
      const info = newEmployee.getRole();
      // Assert
      expect(info).toEqual("Employee");
    });
  });
});
