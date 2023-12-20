let container = document.querySelector("#Container");
myStorage = window.localStorage;

for (let index = 0; index < shirts.length; index++) {
    let div = document.createElement("div");
    div.className = "shirt";

    let image = document.createElement("img");
    image.className = "shirt_image";

    let new_div = document.createElement("div");
    new_div.className = "ND";

    let shirt_name = document.createElement("p");
    let description = document.createElement("p");
    let button_div = document.createElement("div");
    button_div.className = "button_div";

    let button = document.createElement("button");
    let button2 = document.createElement("button");
    image.setAttribute('src', shirts[index]["colors"]["white"]["front"]);
    shirt_name.textContent = shirts[index]["name"];

    
    description.textContent = "Доступно цветов:" + Object.keys(shirts[index]["colors"]).length;
    button.textContent = "Quick View";
    button2.textContent = "See Page";
    button.className = "button";
    button2.className = "button";

    function openPage(){
        localStorage.setItem("shirt", shirts[index]["name"]);
    
        window.location.href = 'INIS-4Laba.html';
    }

    button2.addEventListener("click", openPage);


    div.appendChild(image);

    new_div.appendChild(shirt_name);
    new_div.appendChild(description);

    button_div.appendChild(button);
    button_div.appendChild(button2);

    new_div.appendChild(button_div);
    div.appendChild(new_div);
    container.appendChild(div);
}
