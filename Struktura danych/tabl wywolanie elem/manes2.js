var names = ['Arek', 'Darek', 'Czarek', 'Mariusz',
    'Marek', 'Wiesław', 'Aneta', 'Stanisława'];

var fullnames = names.map(function (name, index) {
    if (name.charAt(name.length - 1) === 'a') {
        return name + ' Kowalska';
    } else {
        return name + ' Kowalski';
    }
});

var names = fullnames.map(function (value) {
    return value.split(' ')[0];
})

console.log(names);
var len = names.reduce(function (result, name, key, array) {
    console.log(key);
    console.log(array);
    if (name.length <= 5) {
        return result += name.length;
    } else {
        return result;
    }
}, 0);
console.log(len);