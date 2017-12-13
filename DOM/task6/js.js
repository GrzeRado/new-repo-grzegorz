var div1 = document.createElement('div')
var div2 = document.createElement('div')
var text = document.createTextNode('Hello')

div2.appendChild(text)
div1.appendChild(div2)
document.body.appendChild(div1)lu