/*
 Problem: give and interget 'n', find factorial of that integer.

 in mathematics, factorial  of a non-negative denoted n!, 
 is the product of all possive intergets less than or equal to 'n'

 factorial Zero is 1.
 Ex: factorial(4) = 4*3*2*1 = 24
*/

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));

// Big-O = O(n).
