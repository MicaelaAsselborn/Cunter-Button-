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

let colors = ["rgb(248, 40, 40)", "rgb(239, 156, 62)", "rgb(234, 224, 36)", "rgb(96, 206, 74)", "rgb(49, 49, 211)", "rgb(153, 68, 189)", "rgb(248, 75, 158)"];

function getColor (){
    //let index = Math.floor(Math.random() * colors.length)
    let index = count % colors.length;
    return colors[index]
}

button.addEventListener("click", function(){
        button.style.backgroundColor = getColor()
    });