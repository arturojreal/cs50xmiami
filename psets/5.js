/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

function drEvil(amount) {
  // write your solution here...
  var amount = prompt("Enter an amount. (Usage: 42)");
  if (amount != 1000000) {
      return amount + "dollars";
  }
  else return amount + "dollars";
}
