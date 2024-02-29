// In a realm where numbers hold secrets, a captivating challenge awaits, which is to, Find the GCD / HCF of two Numbers !!!

// Problem Description: We are given two numbers. The task is to find the GCD / HCF of the numbers.

// GCD: Greatest Common Divisor
function gcd(num1, num2) {

  let min = Math.min(num1, num2);
  while (min > 0) {
    if((num1 % min == 0 && num2 % min == 0)){
      return min
    }
    min--
  }
}
let ans = gcd(10, 19);
console.log(ans);
