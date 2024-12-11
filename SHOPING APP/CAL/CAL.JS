var buttons = document.querySelectorAll(".grid button");
var display = document.querySelector(".display")
let equal = document.getElementById("eqaul")
let clear = document.getElementById("clear")
let back = document.getElementById("back")
equal.addEventListener("click",(e) => {
    try{
        display.innerText= eval(display.innerText);
    }catch{
        display.innerText=" invalid";
    }
    display.innerText= eval(display.innerText);
})
clear.addEventListener("click", () => {
    display.innerText = ""
})
back.addEventListener("click",()=>{
    display.innerText= display.innerText.slice(0,-1);
})
buttons.forEach(function(buttom){
    buttom.addEventListener("click",function(e){
        display.innerText=  display.innerText+e.target.innerText;
    })
})
