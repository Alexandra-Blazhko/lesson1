"use strict";
class Options {
         constructor(height, width, backgroundColor = FFF, fontSize, textAlign) {
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
            //newDiv.style.background = this.backgroundColor;
            newDiv.style.cssText = 'height: this.height; width: this.width; background-color: this.backgroundColor; font-size: 44px; color: blue';
            
                    //console.log(makeNewDiv())
                   
         }

     }
     var newOptions = new Options(150, 150);
     console.log(newOptions.makeNewDiv());