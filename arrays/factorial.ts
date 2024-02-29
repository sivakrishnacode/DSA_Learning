function factorial(num) {

  // let ans = 1
  // for (let i = 1; i <= num; i++) {
  //   ans = i * ans
  // }
  // return ans

  let ans = 1
  while(num > 0){
    ans = ans * num
    num--
  }
  return ans
}
let ans = factorial(5);
console.log(ans);
