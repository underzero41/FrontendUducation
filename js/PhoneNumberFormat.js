// function createPhoneNumber(numbers){
//     var phoneNumber = numbers.join("");
//     var areaCode = phoneNumber.substring(0,3);
//     var firstPart = phoneNumber.substring(3,6);
//     var secondPart = phoneNumber.substring(6,10);
//     return `(${areaCode}) ${firstPart}-${secondPart}`;
// }

function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

var numbers = [1,2,3,4,5,6,7,8,9,0];
var formated = createPhoneNumber(numbers);
console.log(formated);