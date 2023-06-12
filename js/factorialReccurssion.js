function getFactorial(n){
    if(n === 1){
        return 1;
    }
    else{
        return n*getFactorial(n-1);
    }
}
var result = getFactorial(4);
console.log(result);