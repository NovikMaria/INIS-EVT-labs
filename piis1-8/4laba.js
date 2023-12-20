let container = document.querySelector("#Container");

let stor = localStorage.getItem("shirt");
localStorage.removeItem("shirt");

let id = 0;

for (let index = 0; index < shirts.length; index++) {
    if(shirts[index]["name"] == stor){
        id = index;
        break;
    }
}

let head = document.createElement("h1");
head.className = "head";
head.textContent = shirts[id]["name"];

let div = document.createElement("div");
div.className = "shirt";

let image = document.createElement("img");
image.className = "shirt_image";

let new_div = document.createElement("div");
new_div.className = "ND";

let price = document.createElement("p");
let description = document.createElement("p");
price.textContent = shirts[id]["price"];
description.textContent = shirts[id]["description"];
    
image.setAttribute('src', shirts[id]["colors"]["white"]["front"]);
    
let button_div = document.createElement("div");
button_div.className = "button_div";

let new_button_div = document.createElement("div");
new_button_div.className = "button_div";

let currentColor = "white";
let currentPosition = "front";

let array = [];
for (const key in shirts[id]["colors"]) {
    array.push(key);
}

for (let index = 0; index < array.length; index++) {
    let button3 = document.createElement("button");
    button3.className = "button";
    button3.textContent = array[index];
    button3.style.border = "2px solid black";
    button3.style.background = array[index];
    button3.addEventListener("click", function(){newColorImage(button3.textContent)});
    new_button_div.appendChild(button3);
}

function newColorImage(color){
    image.setAttribute('src', shirts[id]["colors"][color][currentPosition])
    currentColor = color;
}

let button = document.createElement("button");
let button2 = document.createElement("button"); 

button.addEventListener("click", function(){
    currentPosition = "front";
    image.setAttribute('src', shirts[id]["colors"][currentColor][currentPosition]);
    
});

button2.addEventListener("click", function(){
    image.setAttribute('src', shirts[id]["colors"][currentColor]["back"]);
    currentPosition = "back";
});
    
button.textContent = "Front";
button2.textContent = "Back";
button.className = "button";
button2.className = "button";

button_div.appendChild(button);
button_div.appendChild(button2);

let firstLineDiv = document.createElement("div");
firstLineDiv.className = "lineDiv";
let secondLineDiv = document.createElement("div");
secondLineDiv.className = "lineDiv";

let p1 = document.createElement("p");
p1.textContent = "Side: ";
let p2 = document.createElement("p");
p2.textContent = "Color: ";

firstLineDiv.appendChild(p1);
firstLineDiv.appendChild(button_div);
secondLineDiv.appendChild(p2);
secondLineDiv.appendChild(new_button_div);

div.appendChild(head);
div.appendChild(image);

new_div.appendChild(price);
new_div.appendChild(description);
new_div.appendChild(firstLineDiv);
new_div.appendChild(secondLineDiv);

div.appendChild(new_div);
container.appendChild(div);