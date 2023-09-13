let buttons = Array.from(document.getElementsByTagName("button"));
let display = document.getElementById("display");
let toggle = document.getElementsByClassName("right");
let body = document.querySelector("body");
let circle = document.getElementById("circle");
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "DEL":
        display.value = display.value.slice(0, -1);
        break;
      case "RESET":
        display.value = "";
        break;
      case "=":
        display.value = display.value.startsWith("0")
          ? eval(display.value.slice(1))
          : eval(display.value);
        break;
      default:
        let lastChar = display.value.charAt(display.value.length - 1);
        if (
          e.target.className == "operators" &&
          (lastChar == "+" ||
            lastChar == "-" ||
            lastChar == "*" ||
            lastChar == "/" ||
            lastChar == ".")
        ) {
          display.value += "";
        } else if (display.value == "Infinity") {
          display.value += "";
        } else {
          display.value += e.target.value;
        }
    }
  });
});

Array.from(toggle[0].children).map((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "1") {
      body.classList.remove("theme2");
      body.classList.remove("theme3");
      circle.style.left = "0";
    } else if (e.target.innerHTML == "2") {
      body.classList.add("theme2");
      body.classList.remove("theme3");
      circle.style.left = "40%";
    } else {
      body.classList.add("theme3");
      body.classList.remove("theme2");
      circle.style.left = "75%";
    }
  });
});

document.addEventListener("keydown", (e) => {
  const keypressed = e.key;
  switch(keypressed) {
    case "Enter":
        display.value = display.value.startsWith("0")
      ? eval(display.value.slice(1))
      : eval(display.value);
      break;
    case "Backspace":
        display.value = display.value.slice(0, -1);
        break;
    case "Escape":
        display.value = "";
        break;
    default:
        if (/[0-9/+\-*/.=]/.test(keypressed)) {
            console.log("keypressed",keypressed);
            let lastChar = display.value.charAt(display.value.length - 1);
            console.log("lastchar",lastChar);
            if (/[+\-*/.=]/.test(lastChar) && !/[0-9]/.test(keypressed)) {
              display.value += "";
            } else if (display.value == "Infinity") {
              display.value += "";
            } else {
              display.value += keypressed;
            }
          }
  }
});
