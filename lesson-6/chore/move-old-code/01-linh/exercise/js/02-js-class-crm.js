class Customer {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo() {
    return `Name: ${this.name},\nEmail: ${this.email},\nPhone: ${this.phone}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

const customer = new Customer(1, "John Doe", "john.doe@example.com", "1234567890");
console.log(customer.displayInfo());
customer.updateEmail("john.doe2@example.com");
console.log(customer.displayInfo());
