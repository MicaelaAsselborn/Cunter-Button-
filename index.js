let counter = document.getElementById("counter");
let count = 0;

function increment() {
    count++;
    counter.innerText = count;
}

function sayOuch() {
    if (count === 20) {
        alert("Ouch!")
    } if (count === 40) {
        alert("Stop!")
    }
}
let button = document.getElementById("button");
/*let state = true;

function setButtonColor (color){
    button.style.backgroundColor = color;
}
button.addEventListener("click", function () {
    if (state) {
        setButtonColor("black");
    } else {
        setButtonColor("pink");
    }
    state = !state;
});*/

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

function getColor (){
    //let index = Math.floor(Math.random() * colors.length)
    let index = count % colors.length;
    return colors[index]
}

button.addEventListener("click", function(){
        button.style.backgroundColor = getColor()
    });