const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-btn");
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

//function EditProfile

function savePopup(evt) {
  evt.preventDefault();

  const usernameInput = document.getElementById("username");
  const userTextInput = document.getElementById("usertext");
  const profileName = document.getElementById("profileName");
  const profileText = document.getElementById("profileText");

  profileName.textContent = usernameInput.value;
  profileText.textContent = userTextInput.value;

  usernameInput.value = "";
  userTextInput.value = "";
  isPopupVisible = false;

  popup.style.display = "none";
}

const savePopupButton = document.getElementById("save-btn");
savePopupButton.addEventListener("click", savePopup);

//function initialCards

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
const cardImgPopup = document.getElementsByClassName("card");
const imageElement = document.getElementsByClassName("card__image");
const bottomBar = document.getElementsByClassName("card__bottom-bar");
const cardTitle = document.getElementsByClassName("card__title");
const likeBtn = document.getElementsByClassName("heart-off");

function addCards() {
  initialCards.forEach((card) => {
    const cardImgPopup = document.createElement("li");
    cardImgPopup.classList.add("card");

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
    cardImgPopup.appendChild(imageElement);
    cardImgPopup.appendChild(bottomBar);
    cardImgPopup.appendChild(trashBtn);
    cardsContainer.appendChild(cardImgPopup);
    trashBtn.addEventListener("click", function () {
      const parentCard = this.closest(".card");
      parentCard.remove();
    });
  });
}

addCards();

//function that appends a new card with user info

const addForm = document.querySelector(".add-form");
const addFormSaveBtn = document.querySelector("#addFormSaveBtn");
const cardTemplate = document.querySelector(".card");
const formElements = addForm.querySelector(".form__elements");

addFormSaveBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  const userPlaceTitle = document.querySelector("#userPlaceTitle").value;
  const userPixUrl = document.querySelector("#userPixUrl").value;

  const newCardElement = cardTemplate.cloneNode(true);
  const cardImage = newCardElement.querySelector(".card__image");
  const cardTitle = newCardElement.querySelector(".card__title");

  cardImage.src = userPixUrl;
  cardImage.alt = userPlaceTitle;
  cardImage.setAttribute("src", userPixUrl);

  cardTitle.textContent = userPlaceTitle;

  cardsContainer.prepend(newCardElement);

  addForm.classList.remove("visible");

  const likeButtons = cardsContainer.querySelectorAll(".heart-off");
  for (let likeButton of likeButtons) {
    likeButton.addEventListener("click", function (event) {
      event.target.classList.toggle("heart-on");
    });
  }
});

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
