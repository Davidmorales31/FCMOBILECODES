// Generator Random Number for images 
let randomNumber = Math.floor(Math.random() * 4) + 1;
console.log(randomNumber);

// Create the components DOM´S
const ImageCont = document.getElementById('imageContent');
const newImage = document.createElement("img");

// Add the new property src Image to the DOM
newImage.src = `/Images/BodyImage${randomNumber}.png`;
newImage.classList.add("ImageBody");
// Add the new Image to the ImageCont
ImageCont.appendChild(newImage);
