function greeting(name = "World") {
  let username = name;

  function displayUsername() {
    return `Hello, ${username}!`;
  }

  return displayUsername;
}

const myGreeting = greeting("John");
console.log(myGreeting());
