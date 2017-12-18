var numbers = [1,5,10,15,20]

var output = numbers.reduce(function(result, value, key, array){
    console.log(result);
    return result += Math.pow(value, key + 1);
}, 0);

console.log(output);