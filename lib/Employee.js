class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.position = "Manager";
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPosition() {
        return this.position;
    }
  }








module.exports = Employee;