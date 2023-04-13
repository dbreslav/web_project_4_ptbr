window.addEventListener("load", function () {
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-btn");
  const editButton = document.querySelector(".edit-btn");
  //const trashBtn = document.querySelector(".trash-btn");
  const addPopup = document.querySelector(".add-form");
  const addPopupBtn = document.querySelector(".add");
  const closeAddBtn = document.querySelector(".close-add-btn");
  //const createCardBtn = document.getElementById("addFormSaveBtn");
  //const userPlaceTitle = document.getElementById("userPlaceTitle");

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

  const cardsContainer = document.querySelector(".cards");
  const cardsPopup = document.getElementsByClassName("cards-popup")[0];
  function renderCards() {
    const cardTemplate = document.querySelector("#card-template").content;

    initialCards.forEach((card) => {
      const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
      cardElement.setAttribute("id", card.id);
      cardElement.querySelector(".card__image").setAttribute("src", card.link);
      cardElement.querySelector(".card__image").setAttribute("alt", card.alt);
      cardElement.querySelector(".card__title").textContent = card.name;

      cardElement
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
          //put the toggle card popup here
          cardsPopup.toggle("visible");
        });

      cardElement
        .querySelector(".trash-btn")
        .addEventListener("click", function (evt) {
          const parentCard = this.closest(".card");
          parentCard.remove();
        });

      cardsContainer.appendChild(cardElement);
    });
  }

  renderCards();

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

  const cardsPopupCloseBtn =
    document.getElementsByClassName("cards-popup__btn");
  const cardsPopupTitle = document.getElementsByClassName("cards-popup__title");
  const cardsPopupImage = document.getElementsByClassName("cards-popup__img");
  const cardsPopupOverlay = document.getElementsByClassName(
    "cards-popup__overlay"
  );

  //Function Card Image popup

  // function createImgCard() {
  //   initialCards.forEach((card) => {
  //     const cardImg = document.createElement("div");
  //     cardImg.classList.add("card-popup");

  //     const closeImgBtn = document.createElement("button");
  //     closeImgBtn.classList.add("popup-img-btn");

  //     const imageElement = document.createElement("img");
  //     imageElement.classList.add("card-popup__image");
  //     imageElement.src = card.link;
  //     imageElement.alt = card.alt;

  //     const imageTitle = document.createElement("p");
  //     imageTitle.classList.add("card-popup__title");
  //     imageTitle.textContent = card.name;

  //     cardImg.appendChild(imageElement);
  //     cardImg.appendChild(closeImgBtn);
  //     cardImg.appendChild(imageTitle);
  //     cardsPopup.appendChild(cardImg);

  //     function toggleCardImagePopup() {
  //       cardImg.classList.toggle("visible");
  //     }

  //     imageElement.addEventListener("click", toggleCardImagePopup);

  //     closeImgBtn.addEventListener("click", toggleCardImagePopup);
  //   });
  // }

  // createImgCard();

  //toggle function for like hearts
  const likeButtons = cardsContainer.querySelectorAll(".heart-off");

  for (let likeButton of likeButtons) {
    likeButton.addEventListener("click", function (event) {
      event.target.classList.toggle("heart-on");
    });
  }
});
