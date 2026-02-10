// 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);

// 2
const person = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(person.address.street);

// 3
const student = {
    name: "John",
    grades: {
        math: 90,
        english: 85
    }
};

console.log(student.grades.math);

// 4
const settings = {
    volume: 50,
    brightness: 75
};

settings.volume = 60;
console.log(settings);

// 5
const bike = {}
bike.color = "red";

console.log(bike);

// 6
const employee = {
    name: "John",
    age: 30
};
// delete employee.age
//console.log(employee);
const {age, ...employeeWithoutAge} = employee;
console.log(employeeWithoutAge);

// 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
};
