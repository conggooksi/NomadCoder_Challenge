const clock = document.querySelector("h2#clock")

function getClock() {
    const xmas = new Date("2022-12-24")
    const date = new Date();

    const diff = xmax - date

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);

