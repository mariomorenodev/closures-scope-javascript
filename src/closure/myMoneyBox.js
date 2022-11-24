function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

function moneyBox2() {
  let saveCoins = 0;

  return function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
}

let myMoneyBox2 = moneyBox2();
myMoneyBox2(5);
