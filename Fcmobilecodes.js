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
const changeIdiomButton = document.getElementById('imageIdiom');

/*changeIdiomButton.addEventListener('click', function(){
    const textTitle = document.getElementById('title');
    const textAlertNewCode = document.getElementById('alertNewCode'); 
    const textRedeemCodes = document.getElementById('redeemCodes'); 
    const textTitleDescription = document.getElementById('titleDescription'); 
    const textSubTitleDescription = document.getElementById('subTitleDescription'); 
    textTitle.textContent = 'CODIGOS DISPONIBLES';
    textAlertNewCode.textContent = '¡Nuevo codigo!';
    textRedeemCodes.textContent = 'Reclama tu codigo'
    textTitleDescription.textContent = 'Codigos del FC Mobile | Reclama tus codigos';
    textSubTitleDescription.textContent = 'Encuentra y canjea códigos de recompensas';
})*/