var counter = 0;

function addPerson (name) {
    localStorage.setItem('person' + counter, name)
    counter++
}