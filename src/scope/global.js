// Variables

var a; // declarando a
var b = "b"; // declarando e inicializando b
b = "bb"; // reasignando b
var a = "a"; // redeclarando a

// Global Scope
var fruit = "Apple"; // Global
console.log(fruit); // Apple

function bestFruit() {
  console.log(fruit); // Apple
}

bestFruit();

function countries() {
  country = "Colombia"; // Global
  console.log(country); // Colombia
}

countries();
console.log(country); // Colombia
