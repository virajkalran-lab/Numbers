let count = 0;
const num = document.getElementById("num");

function decrease() {
    count--;
    num.textContent = count;
}

function reset() {
    count = 0;
    num.textContent = count;
}

function increase() {
    count++;
    num.textContent = count;
}