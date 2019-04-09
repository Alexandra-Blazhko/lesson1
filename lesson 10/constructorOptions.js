"use strict";
class Options {
         constructor(height, width, backgroundColor, fontSize, textAlign) {
             this.height = height;
             this.width = width;
             this.backgroundColor = backgroundColor;
             this.fontSize = fontSize;
             this.textAlign = textAlign;
         }
         makeNewDiv() {
            var newDiv = document.createElement('div');
            document.body.appendChild(newDiv);
            newDiv.textContent = prompt("What?", "");
            newDiv.style.cssText = newDiv.style.cssText = 'height: ' + this.height + '; \
            width: ' + this.width + '; \
            background-color: ' + this.backgroundColor + '; \
            font-size: ' + this.fontSize + '; \
            text-align: ' + this.textAlign;    
         }

     }
     var newOptions = new Options(100, 100, "red", 44, "center");
    
    console.log(newOptions.makeNewDiv());

     