let targets = document.querySelectorAll(".target");

let dragging = false; 
let sticky = false; 
let offsetX, offsetY; 
let originalX, originalY; 
let currentTarget; 

//Обработчики событий для каждого элемента
for (let target of targets) {
  // Обработчик для события "mousedown"
  target.addEventListener("mousedown", function(event) {
    // Устанавливаем флаг "dragging" в true и запоминаем элемент target, по которому произошло событие
    dragging = true;
    currentTarget = target;
    // Запоминаем начальную позицию элемента
    originalX = target.offsetLeft;
    originalY = target.offsetTop;
    // Вычисляем смещение мыши относительно верхнего левого угла элемента target
    offsetX = event.clientX - target.offsetLeft;
    offsetY = event.clientY - target.offsetTop;
    // Добавляем класс "selected" к элементу target
    target.classList.add("selected");
  });

  // Обработчик для события "mouseup"
  target.addEventListener("mouseup", function(event) {
    // Устанавливаем флаг "dragging" в false и убираем класс "selected" у элемента target
    dragging = false;
    target.classList.remove("selected");
  });

  // Обработчик для события "dblclick"
  target.addEventListener("dblclick", function(event) {
    // Изменяем состояние флага "sticky" и запоминаем текущий элемент target
    sticky = !sticky;
    currentTarget = target;
    originalX = target.offsetLeft;
    originalY = target.offsetTop;
    offsetX = event.clientX - target.offsetLeft;
    offsetY = event.clientY - target.offsetTop;
    // Переключаем класс "sticky" у элемента target
    target.classList.toggle("sticky");
  });
}


//Обработчики для движения мыши и нажатия клавиш
document.addEventListener("mousemove", function(event) {
  if (dragging || sticky) {
    let newX = event.clientX - offsetX;
    let newY = event.clientY - offsetY;
    currentTarget.style.left = newX + "px";
    currentTarget.style.top = newY + "px";
  }
});


document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    dragging = false;
    sticky = false;
    currentTarget.classList.remove("selected");
    currentTarget.classList.remove("sticky");
    currentTarget.style.left = originalX + "px";
    currentTarget.style.top = originalY + "px";
  }
});