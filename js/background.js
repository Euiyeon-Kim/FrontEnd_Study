const images = ["0.png", "1.jpeg"];

const bgImage = document.createElement("img");
bgImage.src = `imgs/${images[Math.floor(Math.random() * images.length)]}`;
document.body.appendChild(bgImage);
