const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
];

const colors2 = [
    "--a", "--b", "--c"
];

const body = document.querySelector("body");
const btn = document.querySelector("button");


function changeColor() {

    const b = "linear-gradient(color1, color2)";



    const color1 = colors2[Math.floor(Math.random() * colors2.length)];
    const color2 = colors2[Math.floor(Math.random() * colors2.length)];
    // body.style.setProperty(""background", linear-gradient(color1, color2));
    console.log(color1, color2);

    const root = document.documentElement;
    const rootStyle = getComputedStyle(root);
    const randomColor = rootStyle.getPropertyValue(`linear-gradient(color1, color2)`);

    return randomColor;
    
}


function changeBoxColor() {
    body.style.backgroundColor = changeColor();
}


btn.addEventListener("click", changeBoxColor);