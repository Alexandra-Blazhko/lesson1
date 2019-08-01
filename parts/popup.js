function popup() {
    let popup = document.querySelector('.popup-form'),
        input = document.querySelector('.popup-form__input'),
        btn = document.querySelector('.button popup-form__btn');

    var closePopup = function () {
        popup.classList.add('hidden');
    }

    function checkPhoneNumber() {
        if (isNaN(input) || input == "" || input != null || keyCode === 27) {
            btn.addEventListener('click', closePopup());
        }

    }
}

module.exports = popup;