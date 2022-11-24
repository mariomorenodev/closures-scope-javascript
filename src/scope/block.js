function fruits() {
  if (true) {
    var fruit1 = "Apple"; // var is function scoped
    let fruit2 = "Banana"; // let is block scoped
    const fruit3 = "Orange"; // const is block scoped
  }

  console.log(fruit1); // Apple
  console.log(fruit2); // ReferenceError: fruit2 is not defined
  console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();

let arr = [1, 2, 3, 4, 10];
arr[20] = "Hello";
console.log(arr.length); // 21
