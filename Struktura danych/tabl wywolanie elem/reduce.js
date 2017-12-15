var numbers = [1,2,3,4,5]

var output = numbers.reduce(function(result, value){
    console.log(result);
    return result -=value;
}, 0);

console.log(output);