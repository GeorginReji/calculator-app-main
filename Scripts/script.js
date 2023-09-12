let buttons = Array.from(document.getElementsByTagName("button"));
let display = document.getElementById("display");
let toggle = document.getElementsByClassName("right");
let body = document.querySelector("body");
let circle = document.getElementById("circle");
// console.log(body);
// console.log(buttons);
// console.log(toggle[0].children);
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerHTML){
            case "DEL":
                display.value = display.value.slice(0, -1);
                break;
            case "RESET":
                display.value = ""
                break;
            case "=": 
                display.value = eval(display.value);
                break;
            default:
                let lastChar = display.value.charAt(display.value.length - 1);
                if(e.target.className == "operators" && (lastChar=="+"|| lastChar =="-" || lastChar =="*" ||
                lastChar == "/" ||  lastChar == "."|| display.value =="Infinity")) {
                    display.value += "";
                }
                else {
                    display.value += e.target.value;
                }
        }
   
    })
})

Array.from(toggle[0].children).map(item => {
    item.addEventListener('click', (e) => {
        if(e.target.innerHTML == "1") {
            body.classList.remove('active3');
            body.classList.remove('active2');
            circle.style.left = '0'
        }
        else if(e.target.innerHTML == "2") {
            body.classList.add('active2');
            body.classList.remove('active1');
            body.classList.remove('active3');
            circle.style.left = '40%'
        }
        else {
            body.classList.add('active3');
            body.classList.remove('active1');
            body.classList.remove('active2');
            circle.style.left = '75%'
        }
    })
})