const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup .close-btn");
const editButton = document.querySelector(".edit-btn");
const trashBtn = document.querySelector(".trash-btn");
const addPopup = document.querySelector(".add-form");
const addPopupBtn = document.querySelector(".add");
const closeAddBtn = document.querySelector(".close-add-btn");
const createCardBtn = document.getElementById("addFormSaveBtn");
const userPlaceTitle = document.getElementById("userPlaceTitle");

//function open/close popup

function togglePopup() {
  popup.classList.toggle("visible");
}
editButton.addEventListener("click", togglePopup);
closePopup.addEventListener("click", togglePopup);

//function opne/close AddPopup

function toggleAddPopup() {
  addPopup.classList.toggle("visible");
}

addPopupBtn.addEventListener("click", toggleAddPopup);
closeAddBtn.addEventListener("click", toggleAddPopup);

//Function SaveEditForm

// function savePopup(evt) {
//   evt.preventDefault();
//   const usernameInput = document.getElementById("username");
//   const userTextInput = document.getElementById("usertext");
//   const profileName = document.getElementById("profileName");
//   const profileText = document.getElementById("profileText");

//   profileName.textContent = usernameInput.value;
//   profileText.textContent = userTextInput.value;

//   isPopupVisible = false;
//   popup.style.display = "none";
// }

// const savePopupButton = document.getElementById("save-btn");

// savePopupButton.addEventListener("click", savePopup);

// function saveAddForm
//function saveAddForm(evt) {
//  evt.preventDefault();
//  const userPlaceTitle = document.getElementById("userPlaceTitle");
//  const userPixUrl = document.getElementById("userPixUrl");
// const placeName = document.getElementsByClassName("card__image");
//const placeUrl = document.getElementsByClassName("card__title");

// for (let i = 0; i < placeName.length; i++) {
//   placeName[i].textContent = userPlaceTitle.value;
// }
// for (let i = 0; i < placeUrl.length; i++) {
//   placeUrl[i].textContent = userPixUrl.value;
// }

// isPopupVisible = false;
// addPopup.style.display = "none";

// const addFormSaveBtn = document.getElementById("addFormSaveBtn");

// addFormSaveBtn.addEventListener("click", saveAddForm);

//function cards

// function saveAddForm(evt) {
//   evt.preventDefault();
//   const userPlaceTitle = document.getElementById("userPlaceTitle");
//   const userPixUrl = document.getElementById("userPixUrl");
//   const placeName = document.getElementsByClassName("card__image");
//   const placeUrl = document.getElementsByClassName("card__title");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    alt: "Vista do Vale de Yosemite",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    alt: "Vista do Lago Louise no Parque Nacional de Banff",
  },
  {
    name: "Montanhas Car...",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    alt: "Vista das Montanhas Carecas",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    alt: "Vista da cordilheira Latemar na Itália",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    alt: "Vista do Parque Nacional da Vanoise na França",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    alt: "Vista do Lago di Braies na Itália",
  },
];
const cardsContainer = document.getElementsByClassName("cards")[0];
function addCards() {
  initialCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.classList.add("card__image");
    imageElement.src = card.link;
    imageElement.alt = card.alt;

    const bottomBar = document.createElement("div");
    bottomBar.classList.add("card__bottom-bar");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = card.name;

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("heart-off");

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");

    bottomBar.appendChild(cardTitle);
    bottomBar.appendChild(likeBtn);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(bottomBar);
    cardElement.appendChild(trashBtn);
    cardsContainer.appendChild(cardElement);

    trashBtn.addEventListener("click", function () {
      const parentCard = this.closest(".card");
      parentCard.remove();
    });
  });
}
addCards();

const cardsPopup = document.getElementsByClassName("cards-popup")[0];

function createImgCard() {
  initialCards.forEach((card) => {
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-popup");

    const closeImgBtn = document.createElement("button");
    closeImgBtn.classList.add("popup-img-btn");

    const imageElement = document.createElement("img");
    imageElement.classList.add("card-popup__image");
    imageElement.src = card.link;
    imageElement.alt = card.alt;

    const imageTitle = document.createElement("p");
    imageTitle.classList.add("card-popup__title");
    imageTitle.textContent = card.name;

    cardImg.appendChild(imageElement);
    cardImg.appendChild(closeImgBtn);
    cardImg.appendChild(imageTitle);
    cardsPopup.appendChild(cardImg);

    function toggleCardImagePopup() {
      cardImg.classList.toggle("visible");
    }

    imageElement.addEventListener("click", toggleCardImagePopup);

    closeImgBtn.addEventListener("click", toggleCardImagePopup);
  });
}

createImgCard();

// criar funcao toggle pro cartao passando o addEventListener pro botao close-popup-img com soft openning and closing

//toggle function for like hearts
const likeButtons = cardsContainer.querySelectorAll(".heart-off");

for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("heart-on");
  });
}
