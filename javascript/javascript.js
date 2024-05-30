const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const characterImage = document.getElementById('characterImage');
const confirmCharacterButton = document.getElementById('confirmCharacterButton');
const arrowLeftOutfit = document.getElementById('arrowLeftOutfit');
const arrowRightOutfit = document.getElementById('arrowRightOutfit');
const confirmOufitButton = document.getElementById('confirmOufitButton');
const playButton = document.getElementById('playButton');
const playButtonStart = document.querySelector('.playButtonStart');
const header1 = document.querySelector('.header1');
const header2 = document.querySelector('.header2');
const divCharacter = document.querySelector('.divCharacter');
const secondDivCharacterOutfits = document.querySelector('.secondDivCharacterOutfits');
const nameInput = document.querySelector('.nameInput');
const dice = document.getElementById('dice');
const clickButtonSound = new Audio('sounds/ClickSoundButton.mp3');//Audio Button Sound, Bron: https://www.youtube.com/watch?v=sW8TKZtoND8
const backgroundSound = new Audio('sounds/backgroundSound.mp3'); // Audio Background Sound, Bron: https://www.youtube.com/watch?v=GNDWNW3IKwU&list=PLMf0q6-pSDdsWY4LWYncx25qvonLA520c&index=21
const carDrivingSoundEffect = new Audio('sounds/carDriving.mp3'); // Audio Car Driving by sound effect, bron: https://www.youtube.com/watch?v=drZB8w2au10
const characterImageOutfit = document.getElementById('characterImageOutfit');
const finalCharacter = document.querySelector('.bedroomCharacter');
const imgFInalCharacter = document.getElementById('finalizedCharacter');
const eventButton = document.getElementById('eventButton');
const bgVideo = document.querySelector('.bgVideo');
const goBackButton = document.getElementById('goBackButton')

/*-------------------------------------array character-------------------------------*/
const characters = [
    "./images/character0.png",
    "./images/character1.png",
    "./images/character2.png",
    "./images/character3.png",
    "./images/character4.png",
];

/*-------------------------------------array outfits------------------------------------*/
const outfitsCharacter0 = [
    "./images/character0-outfit0.png",
    "./images/character0-outfit1.png",
    "./images/character0-outfit2.png"
];

const outfitsCharacter1 = [
    "./images/character1-outfit0.png",
    "./images/character1-outfit1.png",
    "./images/character1-outfit2.png"
];

const outfitsCharacter2 = [
    "./images/character2-outfit0.png",
    "./images/character2-outfit1.png",
    "./images/character2-outfit2.png"
];

const outfitsCharacter3 = [
    "./images/character3-outfit0.png",
    "./images/character3-outfit1.png",
    "./images/character3-outfit2.png"
];

const outfitsCharacter4 = [
    "./images/character4-outfit0.png",
    "./images/character4-outfit1.png",
    "./images/character4-outfit2.png"
];


/*--------------------------------------------lets--------------------------------------------*/
let currentIndexCharacter = 0;
let currentIndexOutfit = 0;
let currentOutfits = outfitsCharacter0;
let namePlayer = '';
let diceNumber = 0;

/*--------------------------------character selecetion-----------------------------------*/
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

/*-----------------------------------outfit selection-----------------------------------------------*/
function selectOufit() {
    console.log("kies de outfit");

    secondDivCharacterOutfits.classList.toggle('hide');
    divCharacter.classList.toggle('hide');
    
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

    characterImageOutfit.src = currentOutfits[currentIndexOutfit]
    header2.textContent = 'Choose ur outfit, ' + namePlayer //avatar naam

    //button sounds plays if clicked
    clickButtonSound.play();
}

function nextOutfit() {
    currentIndexOutfit = (currentIndexOutfit + 1) % currentOutfits.length; // Update currentIndexOutfit
    characterImageOutfit.src = currentOutfits[currentIndexOutfit]; // Wijs de geselecteerde outfit toe aan characterImageOutfit
}

// Functie om naar de vorige outfit te gaan
function previousOutfit() {
    currentIndexOutfit = (currentIndexOutfit - 1 + currentOutfits.length) % currentOutfits.length; // Update currentIndexOutfit
    characterImageOutfit.src = currentOutfits[currentIndexOutfit]; // Wijs de geselecteerde outfit toe aan characterImageOutfit
}

/*--------------------------------bedroom avatar finish----------------------------------------------------------------*/
function bedroom() {
    imgFInalCharacter.src = characterImageOutfit.src

    divCharacter.classList.add('hide');
    secondDivCharacterOutfits.classList.add('hide');
    finalCharacter.classList.toggle('hide')
    document.body.style.backgroundImage = "url(./images/bedroom.jpg)"
    //button sounds plays if clicked
    clickButtonSound.play();
}

function showCharacterDiv() {
    //secondDivCharacterOutfits.classList.add('hide');
    divCharacter.classList.remove('hide');
    playButtonStart.classList.add('hide')  //haalt begin scherm weg
    namePlayer = nameInput.value; // avatar naam
    header1.textContent = `Choose ur avatar, ` + namePlayer;
    //button sounds plays if clicked
    clickButtonSound.play();
}

/*-------------------------------------Random character--------------------------------------*/

function randomCharacter() {
    currentIndexCharacter = Math.round(Math.random() * 4);
    characterImage.src = characters[currentIndexCharacter];
}

/*-------------------------------------Background Sound--------------------------------------*/

// function to play background music
function playSoundLoop() {
    backgroundSound.play();
}

/*-------------------------------------Event Div show function--------------------------------------*/

function showAnimationForEvent() {
    finalCharacter.classList.add('hide');
    document.body.style.backgroundImage = "url()"
    bgVideo.classList.remove('hide')
    //setTimeOut if itd the 15000 video stops and new function starts
    setTimeout(showEventDiv, 15000)
    carDrivingSoundEffect.play();
}

function showEventDiv() {
    bgVideo.classList.add('hide')
    document.body.style.backgroundImage = "url(./images/event.jpg)" // brond: https://nl.pinterest.com/pin/440860251042104281/
    finalCharacter.classList.remove('hide');
    eventButton.classList.add('hide')
    goBackButton.classList.remove('hide')
}

/*-------------------------------------Go back home--------------------------------------*/

function goHome() {
    document.body.style.backgroundImage = "url(./images/bedroom.jpg)" //bron: https://nl.pinterest.com/pin/838584393144678367/
    eventButton.classList.remove('hide')
    goBackButton.classList.add('hide')
}

/*-----------------------------------EvenLIsterners----------------------------------------------*/

arrowLeft.addEventListener('click', previousCharacter);
arrowRight.addEventListener('click', nextCharacter);
arrowRightOutfit.addEventListener('click', previousOutfit);
arrowLeftOutfit.addEventListener('click', nextOutfit);
confirmCharacterButton.addEventListener('click', selectOufit);
confirmOufitButton.addEventListener('click', bedroom);
playButton.addEventListener('click', showCharacterDiv);
dice.addEventListener('click', randomCharacter);
backgroundSound.addEventListener('ended', playSoundLoop);// When backgroundSound ends it restarts
eventButton.addEventListener('click', showAnimationForEvent)
goBackButton.addEventListener('click', goHome)


// Starts the sound when whole page is loaded, otherwise sound wont load
window.addEventListener('load', () => {
    playSoundLoop();
}); // bron om sound te laden:https://chatgpt.com/share/7f3b61a6-c20f-4175-8e5e-cbb494988592