const images = [
    "forest_fog.jpg",
    "forest_sunshine.jpg",
    "galaxy.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);