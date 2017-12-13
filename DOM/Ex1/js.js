function addElement() {
    var newDiv = document.createElement("div");
    var NewContent = document.createTextNode("Hi there!");
    newDiv.appendChild(newContent);

    var currentDiv = document.querySelector(".main");
    document.body.insertBefore(newDiv, currentDiv);
}