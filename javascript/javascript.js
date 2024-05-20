const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const characterImage = document.getElementById('characterImage');
const confirmCharacterButton = document.getElementById('confirmCharacterButton');
const arrowLeftOutfit = document.getElementById('arrowLeftOutfit');
const arrowRightOutfit = document.getElementById('arrowRightOutfit');
const characterArrow1 = document.querySelector('.characterArrow1');
const characterArrow2 = document.querySelector('.characterArrow2');
const outfitArrow1 = document.querySelector('.outfitArrows1');
const outfitArrow2 = document.querySelector('.outfitArrows2');
const confirmOufitButton = document.getElementById('confirmOufitButton');
const playButton = document.getElementById('playButton');
const playButtonStart = document.querySelector('.playButtonStart');
const header1 = document.querySelector('.header1');
const header2 = document.querySelector('.header2');
const secondDivCharacterOutfits = document.querySelector('.secondDivCharacterOutfits');
const nameInput = document.querySelector('.nameInput');
const dice = document.getElementById('dice');

// Define characters array
const characters = [
    "../images/character0.png",
    "../images/character1.png",
    "../images/character2.png",
    "../images/character3.png",
    "../images/character4.png",
];

//outfits characters
const outfitsCharacter0 = [
    "../images/character0-outfit0.png",
    "../images/character0-outfit1.png",
    "../images/character0-outfit2.png"
];

const outfitsCharacter1 = [
    "../images/character1-outfit0.png",
    "../images/character1-outfit1.png",
    "../images/character1-outfit2.png"
];

const outfitsCharacter2 = [
    "../images/character2-outfit0.png",
    "../images/character2-outfit1.png",
    "../images/character2-outfit2.png"
];

const outfitsCharacter3 = [
    "../images/character3-outfit0.png",
    "../images/character3-outfit1.png",
    "../images/character3-outfit2.png"
];

const outfitsCharacter4 = [
    "../images/character4-outfit0.png",
    "../images/character4-outfit1.png",
    "../images/character4-outfit2.png"
];

// lets
let currentIndexCharacter = 0;
let currentIndexOutfit = 0;
let currentOutfits = outfitsCharacter0;
let namePlayer = '';
let diceNumber = 0;

// Function to change to the next character
function nextCharacter() {
    currentIndexCharacter = (currentIndexCharacter + 1) % characters.length; //cznnot be bigger than array
    characterImage.src = characters[currentIndexCharacter]; //.src past alleen src aan
}

// Function to change to the previous character
function previousCharacter() {
    currentIndexCharacter = (currentIndexCharacter - 1 + characters.length) % characters.length;
    characterImage.src = characters[currentIndexCharacter];
}

function displayOutfitSelection() {
    console.log("kies outfit");
}

/*--------------------3e pagina-----------------------------------------------*/
function selectOufit() {
    console.log("kies de outfit");

    characterArrow1.classList.toggle('hide');
    characterArrow2.classList.toggle('hide');
    outfitArrow1.classList.toggle('hide');
    outfitArrow2.classList.toggle('hide');
    confirmCharacterButton.classList.toggle('hide');
    confirmOufitButton.classList.toggle('hide');
    header1.classList.toggle('hide');
    header2.classList.toggle('hide');
    
    if (currentIndexCharacter === 0) {
        currentOutfits = outfitsCharacter0
    } else if (currentIndexCharacter === 1) {
        currentOutfits = outfitsCharacter1
    } else if (currentIndexCharacter === 2) {
        currentOutfits = outfitsCharacter2
    } else if (currentIndexCharacter === 3) {
        currentOutfits = outfitsCharacter3
    } else {
        currentOutfits = outfitsCharacter4
    }

    characterImage.src = currentOutfits[currentIndexOutfit]
    header2.textContent = `Choose ur outfit, ` + namePlayer //avatar naam
    dice.classList.add('hide')
}

function nextOutfit() {
    currentIndexOutfit = (currentIndexOutfit + 1) % currentOutfits.length; // Update currentIndexOutfit
    characterImage.src = currentOutfits[currentIndexOutfit]; // Wijs de geselecteerde outfit toe aan characterImage
}

// Functie om naar de vorige outfit te gaan
function previousOutfit() {
    currentIndexOutfit = (currentIndexOutfit - 1 + currentOutfits.length) % currentOutfits.length; // Update currentIndexOutfit
    characterImage.src = currentOutfits[currentIndexOutfit]; // Wijs de geselecteerde outfit toe aan characterImage
}

/*-----------------------bedroom----avatar finish----------------------------------------------------------------*/
function bedroom() {
    characterArrow1.classList.add('hide');
    characterArrow2.classList.add('hide');
    outfitArrow1.classList.add('hide');
    outfitArrow2.classList.add('hide');
    confirmCharacterButton.classList.add('hide');
    confirmOufitButton.classList.add('hide');
    header2.classList.add('hide');


}

function showCharacterDiv() {
    secondDivCharacterOutfits.classList.remove('hide');
    playButtonStart.classList.add('hide')
    namePlayer = nameInput.value // avatar naam
    header1.textContent = `Choose ur avatar, ` + namePlayer

    dice.classList.remove('hide');
    document.body.style.backgroundImage = "url(../images/bedroom.jpg)"
}

/*-------------------------------------Random character--------------------------------------*/

function randomCharacter() {
    currentIndexCharacter = Math.round(Math.random() * 4);
    characterImage.src = characters[currentIndexCharacter];
}

arrowLeft.addEventListener('click', previousCharacter);
arrowRight.addEventListener('click', nextCharacter);
arrowRightOutfit.addEventListener('click', previousOutfit);
arrowLeftOutfit.addEventListener('click', nextOutfit);
confirmCharacterButton.addEventListener('click', selectOufit);
confirmOufitButton.addEventListener('click', bedroom);
playButton.addEventListener('click', showCharacterDiv);
dice.addEventListener('click', randomCharacter);