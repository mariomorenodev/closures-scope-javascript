var firstName; // undefined | declarar
firstName = "John";
console.log(firstName); // John

var lastName = "Doe"; // declarar e asignando
lastName = "Smith";
console.log(lastName); // Smith

var secondName = "David";
secondName = "Ana"; // reasignar
console.log(secondName); // Maria

// Let
let fruit = "Apple"; // declarar e asignar
fruit = "Orange"; // reasignar

let fruit = "Banana"; // Error: Identifier 'fruit' has already been declared

// Const
const fruit = "Dog"; // declarar e asignar
fruit = "Cat"; // Error: Assignment to constant variable.
console.log(fruit); // Apple

const vehicles = ["Car", "Bike", "Boat"]; // declarar e asignar
vehicles.push("Plane"); // agregar un elemento
console.log(vehicles);
