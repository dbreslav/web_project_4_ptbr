const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-btn");
const editButton = document.querySelector(".edit-btn");

//function open/close popup

function togglePopup() {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

editButton.addEventListener("click", togglePopup);
closePopup.addEventListener("click", togglePopup);

//Function Save

function savePopup(evt) {
  evt.preventDefault();
  const usernameInput = document.getElementById("username");
  const userTextInput = document.getElementById("usertext");
  const profileName = document.getElementById("profileName");
  const profileText = document.getElementById("profileText");

  profileName.textContent = usernameInput.value;
  profileText.textContent = userTextInput.value;

  isPopupVisible = false;
  popup.style.display = "none";
}

const savePopupButton = document.getElementById("save-btn");

savePopupButton.addEventListener("click", savePopup);

//function add cards

const cardsContainer = document.getElementsByClassName("cards")[0];

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
    cardTitle.src = card.name;

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
  });
}

addCards();

//toggle function for like hearts
const likeButtons = cardsContainer.querySelectorAll(".heart-off");
for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("heart-on");
  });
}
