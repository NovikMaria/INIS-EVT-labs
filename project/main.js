const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/NAV_CLOSE.svg";
    } else {
        navBtnImg.src = "./img/NAV.svg";
    }
}

// Выбираем кнопку
const btn = document.querySelector(".nav-link-theme-pic");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});



//<button class="btn-toggle">Переключатель тёмной темы</button>//
//<h1>Привет! Это просто заголовок</h1>//
