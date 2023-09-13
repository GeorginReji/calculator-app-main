let buttons = Array.from(document.getElementsByTagName("button"));
let display = document.getElementById("display");
let toggle = document.getElementsByClassName("right");
let body = document.querySelector("body");
let circle = document.getElementById("circle");
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
                console.log(display.value);
                display.value = display.value.startsWith("0") ? 
                eval(display.value.slice(1)): eval(display.value);
                break;
            default:
                let lastChar = display.value.charAt(display.value.length - 1);
                if(e.target.className == "operators" && (lastChar=="+"|| lastChar =="-" || lastChar =="*" ||
                lastChar == "/" ||  lastChar == "."|| display.value =="Infinity")) {
                    display.value += "";
                }
                else {
                    console.log(e.target.value);
                    display.value += e.target.value;
                }
        }
   
    })
})

Array.from(toggle[0].children).map(item => {
    item.addEventListener('click', (e) => {
        if(e.target.innerHTML == "1") {
            body.classList.remove('theme2');
            body.classList.remove('theme3');
            circle.style.left = '0'
        }
        else if(e.target.innerHTML == "2") {
            body.classList.add('theme2');
            body.classList.remove('theme3');
            circle.style.left = '40%'
        }
        else {
            body.classList.add('theme3');
            body.classList.remove('theme2');
            circle.style.left = '75%'
        }
    })
})