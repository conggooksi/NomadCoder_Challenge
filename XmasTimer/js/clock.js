const clock = document.querySelector("h2#clock")

function diffClock() {
    const xmas = new Date("2022-12-25");
    const date = new Date();
    
    const diff = xmas - date;

    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    
    clock.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

diffClock();
setInterval(diffClock, 1000);

