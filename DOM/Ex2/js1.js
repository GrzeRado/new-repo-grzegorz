function addElement (tag, text, target) {
    var newElement = document.createElement(tag);
    var newContent = document.createTextNode(text);
    newElement.appendChild(newContent);

    target.appendChild(newElement)
}