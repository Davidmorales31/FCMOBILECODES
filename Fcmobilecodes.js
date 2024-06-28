// Generator Random Number for images 
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

// Create the components DOM´S
const ImageCont = document.getElementById('imageContent');
const newImage = document.createElement("img");

// Add the new property src Image to the DOM
newImage.src = `/Images/BodyImage${randomNumber}.png`;
newImage.classList.add("ImageBody");
// Add the new Image to the ImageCont
ImageCont.appendChild(newImage);


// Add logic for change the Idiom
/* function changeIdiom(){

    const img1 ='/Images/FCMobileCodes.ico';
    const img2 = '/Images/español.png';



    var idiomImage =  document.getElementById('imageIdiom');
    let imageActual =  idiomImage.src;
    if(imageActual === img1){
        idiomImage.src = img2;
    }else{
        idiomImage.src = img1;
    }
} */