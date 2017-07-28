

function coinCounter (num) {
  // Initialize a JavaScript object to hold the coins

  num = num * 100
  var coinPurse = {};
  
  coinPurse.quarters = parseInt(num / 25);
  num = num % 25;

  coinPurse.dimes = parseInt(num/ 10);
  num = num % 10;

  coinPurse.nickels = parseInt( num / 5);
  num = num % 5;
  
  coinPurse.pennies = parseInt(num);
    

  return coinPurse;
}


var coins = coinCounter(2.33);
console.log(coins);