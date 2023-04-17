window.addEventListener("load", function () {
  const popup = document.querySelector(".popup");

  const closePopup = document.querySelector(".close-btn");

  const editButton = document.querySelector(".edit-btn");

  const addPopup = document.querySelector(".add-form");

  const addPopupBtn = document.querySelector(".add");

  const closeAddBtn = document.querySelector(".close-add-btn");

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

    let usernameInput = document.getElementById("username").value;

    let userTextInput = document.getElementById("usertext").value;

    const profileName = document.getElementById("profileName");

    const profileText = document.getElementById("profileText");

    profileName.textContent = usernameInput;

    profileText.textContent = userTextInput;

    usernameInput = "Jacques Cousteau";

    userTextInput = "Explorar";

    togglePopup();
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
      name: "Montanhas Carecas",

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
  const cardTemplate = document.querySelector("#card-template").content;

  function renderCards() {
    initialCards.forEach((card) => {
      adicionarNovo(card, cardTemplate);
    });
  }
  //function that appends a new card with user info

  const addForm = document.querySelector(".add-form");

  const addFormSaveBtn = document.querySelector("#addFormSaveBtn");

  const formElements = addForm.querySelector(".form__elements");

  function adicionarNovo(card, cardTemplate, newCard = false) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    cardElement.setAttribute("id", card.id);

    cardElement.querySelector(".card__image").setAttribute("src", card.link);

    cardElement.querySelector(".card__image").setAttribute("alt", card.alt);

    cardElement.querySelector(".card__title").textContent = card.name;

    cardElement

      .querySelector(".card__image")

      .addEventListener("click", function (evt) {
        cardsPopup.classList.toggle("visible");

        cardsPopup

          .querySelector(".cards-popup__img")

          .setAttribute("src", card.link);

        cardsPopup

          .querySelector(".cards-popup__img")

          .setAttribute("alt", card.alt);

        cardsPopup.querySelector(".cards-popup__title").textContent = card.name;
      });

    const cardsPopupBtn = document.querySelector(".cards-popup__btn");

    cardsPopupBtn.addEventListener("click", function (evt) {
      cardsPopup.classList.remove("visible");
    });

    cardElement

      .querySelector(".trash-btn")

      .addEventListener("click", function (evt) {
        const parentCard = this.closest(".card");

        parentCard.remove();
      });

    if (!newCard) {
      cardsContainer.appendChild(cardElement);
    } else {
      cardsContainer.prepend(cardElement);
    }
  }

  renderCards();

  addFormSaveBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    const userPlaceTitle = document.querySelector("#userPlaceTitle").value;

    const userPixUrl = document.querySelector("#userPixUrl").value;

    adicionarNovo(
      { name: userPlaceTitle, link: userPixUrl, alt: userPlaceTitle },

      cardTemplate,

      true
    );

    document.querySelector("#userPlaceTitle").value = "Titulo";

    document.querySelector("#userPixUrl").value = "Imagem URL";

    addForm.classList.remove("visible");

    //====//this function only works for the newly added cards.
    const likeButtons = cardsContainer.querySelectorAll(".heart-off");

    for (let likeButton of likeButtons) {
      likeButton.addEventListener("click", function (event) {
        console.log("clicked new one");
        event.target.classList.toggle("heart-on");
      });
    }
    //======//
  });

  //toggle function for like hearts

  //===//this function works for the old cards
  const likeButtons = cardsContainer.querySelectorAll(".heart-off");

  for (let likeButton of likeButtons) {
    likeButton.addEventListener("click", function (event) {
      console.log("clicked");
      event.target.classList.toggle("heart-on");
    });
  }
  //===/
});
