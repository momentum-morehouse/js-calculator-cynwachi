console.log("test")
let buttons = document.querySelectorAll (".buttons")

for (let button of buttons){
    //console.log(buttons)
    //console.log(7)
    button.addEventListener("click", function (event){
        //holds function part 
        console.log(event.target) // referring to variables that refer to other things
    }
    )
}
