const myGlobal = 0;

function Myfunction() {
  const myNumber = 1;
  console.log(myNumber);

  function parent() {
    // function interta
    const inner = 2;
    console.log(inner);
    console.log(myNumber);
    console.log(myGlobal);

    function child() {
      // function interna
      const innermost = 3;
      console.log(innermost);
      console.log(inner);
      console.log(myNumber);
      console.log(myGlobal);
    }

    return child();
  }

  return parent();
}

Myfunction();

function sumWithClosure(firstNum) {
  // Tu código aquí 👈
  function secondNum(secondNum) {
    return firstNum + secondNum;
  }

  return secondNum((secondNum = 0));
}

sumWithClosure(1)(2);

export function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  };
}
