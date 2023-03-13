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

function savePopup() {
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

//toggle function for like hearts
const likeButtons = document.querySelectorAll(".heart-off");
for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("heart-on");
  });
}
