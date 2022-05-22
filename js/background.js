const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage2 = images[Math.floor(Math.random() * images.length)];

const bgImage2 = document.createElement("img");

bgImage2.src = `img/${chosenImage2}`;
