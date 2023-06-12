// function divisors(n) {
//   var result = [];
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       result.push(i);
//       if (i !== n / i) {
//         result.push(n / i);
//       }
//     }
//   }
//   if (result.length === 0) {
//     return n + " is prime";
//   }
//  result.sort(function(a, b) {
//     return a - b;
//   });
//   return result;
// }

// console.log(divisors(12)); // [3, 5]
// console.log(divisors(11)); // 13 is prime


function divisors(n) {
    let res=[];
    for (let index = 2; index < Math.floor(n/2); index++) if(n % index==0) res.push(index);
    return res.length ? res : n + " is prime"
}
console.log(divisors(13));