function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
startBtn : document.querySelector("button[data-start]"),
stopBtn : document.querySelector("button[data-stop]"),
body : document.querySelector("body"),
}
let timerId;

refs.startBtn.addEventListener("click", (event) => {
    event.target.disabled = true;
    refs.stopBtn.disabled = false;
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        refs.body.style.backgroundColor = color;
        return color;
      }, 1000)
});

refs.stopBtn.disabled = true;
refs.stopBtn.addEventListener("click", (event) => {
    event.target.disabled = true;
    refs.startBtn.disabled = false;
    return clearInterval(timerId);
});
