function countDigit(num: number){
  // let ans = num.toString().split('').length
  // let ans = num.toString().length
  // return ans

    let ans = 0;
    while (num > 0) {
        num = Math.floor(num / 10); 
        ans++;
    }
    return ans;

}
let ans = countDigit(789)
console.log(ans)
