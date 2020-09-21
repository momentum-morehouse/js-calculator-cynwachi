function calc() {
    // makes browser make me write good JS
    "use strict";

    const display = document.querySelector('.displayOut');
    const keys = document.querySelectorAll('.buttons');
    let input = [];
    let expression= "";
    for (const key of keys) {
        key.addEventListener('click', function () {
            if (this.classList.contains('operand')){
                display.value += this.value;
            }
            if (this.classList.contains('operant')) {
                input.push(parseFloat(display.value));
                input.push(this.value);
                display.value = "";
            }
            if (this.classList.contains('clearButton')){
                input = [];
                display.value = "";
            }
            if (this.classList.contains('equalButton')) {
                input.push(parseFloat(display.value));
                
                for (let x = 0; x < input.length; x++) {
                    expression += input[x];
                }

                display.value = eval(expression);
                input =[];
                expression = "";
            }
        });
        
        
    }
}
calc();