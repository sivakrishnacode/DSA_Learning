// Trailing zero in factorial numbers
function countZeros(num) {
  let ans = 1
  while(num != 0) {
  ans = ans * num
  num--
  }
  console.log(ans);

  let x = 0
  while(ans % 10 == 0){
    x++
    ans = Math.floor(ans / 10)
  };

  return x
}
let ans = countZeros(10);
console.log(ans);
