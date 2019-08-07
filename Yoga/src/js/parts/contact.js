function contact() {
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let contact = document.querySelector('#form'),
        formContacts = contact.getElementsByTagName('input'),

        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");



    contact.addEventListener('submit', function (evt) {
        evt.preventDefault();
        contact.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application.json; charset=utf-8');

        let formData = new FormData(contact);

        //Превращаем formData в json. То, что ввёл пользователь
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });
        //Очищаем инпуты после отправки

        for (let i = 0; i < formContacts.length; i++) {
            formContacts[i].value = '';
        }

        let json = JSON.stringify(obj);
        request.send(json);

    });
}
module.exports = contact;