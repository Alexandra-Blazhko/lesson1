//Добавляем пятую кнопку и меняем местами вторую и третью

let item = document.querySelectorAll('.menu .menu-item');
let li = document.querySelector("li");
let menu = document.querySelector(".menu");
menu.insertBefore(item[2], item[1]);
let li1 = document.createElement('li');
li1.innerHTML = "Пятый элемент";
li1.classList.add('menu-item');
menu.appendChild(li1);
console.log(item[0]);
console.log(li1);

//Добавляем слово "подлинную". Т.е. меняем всю строку.
let title = document.querySelector('.title');
let oldTitle = document.querySelector('div .title');
console.log(oldTitle);
oldTitle.innerHTML = "Мы продаем только подлинную технику Apple";

//Удаляем рекламу
let adv = document.querySelector('div .adv');
console.log(adv);
if (adv.parentNode) {
    adv.parentNode.removeChild(adv);
}
//Добавляем промпт с задержкой
 var call = function() {
    if (document.querySelector('body')) {
var answer = prompt("Как вам apple?", "");
document.getElementById('prompt').innerHTML = answer;
    }
}
setTimeout(call, 1000);

    //НУЖНО ПОМЕНЯТЬ БЭКГРАУНД!
var apple = document.querySelector('body');
//apple.style.backgroundImage = "url(C:/Javascript/for each/урок с яблоком 017/img/apple1.img)";
apple.style.backgroundImage = "url('https://www.gastronom.ru/binfiles/images/20160829/b15df714.jpg')";
console.log(apple);