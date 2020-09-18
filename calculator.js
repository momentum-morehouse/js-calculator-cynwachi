const display = document.querySelector(".calculator__display");
//global variables go here
function input () {
    //grabbing buttons 
    const buttons = document.querySelectorAll(".js-button");

    buttons.addEventListener("click", function(){
        //anonymous function 
        display.innerHTML= buttons.value;
    });
}
// call function 
input();


function js-button