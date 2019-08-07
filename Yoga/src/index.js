window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    let tabs = require('./js/parts/tabs.js'),
        form = require('./js/parts/form.js'),
        calc = require('./js/parts/calc.js'),
        slider = require('./js/parts/slider.js'),
        timer = require('./js/parts/timer.js'),
        popup = require('./js/parts/popup.js'),
        modal = require('./js/parts/modal.js'),
        contact = require('./js/parts/contact.js');

        tabs();
        form();
        calc();
        slider();
        timer();
        modal();
        popup();
        contact();
        
}); 