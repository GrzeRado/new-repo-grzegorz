var el1 = document.getElementById('first')

var el2 = document.getElementsByClassName('my')[0]

var el3 = document.getElementsByClassName('element')[0]

var el4 = document.getElementsByClassName('div')[0]

var el5 = document.querySelector('div#first.my.element')

var el6 = document.querySelectorAll('div#first.my.element')[0]

console.log(
el1,
el2,
el3,
el4,
el5,
el6
)