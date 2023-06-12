// function armstrong(num){
//     let numDigits = num.toString().length; //колличество цифр в числе
//     let sum = 0;
//     let currNum = num;

//     while(currNum>0){
//         let digit = currNum%10; //получаем последнюю цифру
//         sum += digit** numDigits; //суммируем в степень колличества цифр
//         currNum = Math.floor(currNum/10) // удаляем последнюю цифру
//     }

//     return sum === num;
// }

function narcissistic(value) {
    return value.toString()
                .split('')
                .map( (x,i,arr) => x ** arr.length)
                .reduce( (a,b)=> +a + +b) 
                 === value
  }
console.log(narcissistic(1533));


