function palindrome(num) {
  // return num.toString() == num.toString().split('').reverse().join('')
  let ip = num
  let ans = 0;
  while (num > 0) {
    let x = num % 10
    ans = ans * 10 + x
    num = Math.floor(num / 10)
  }
  return ans == ip
}
let ans = palindrome(787);
console.log(ans);
