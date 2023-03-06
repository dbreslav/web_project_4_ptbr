const popup = document.getElementById("popup");
const closePopup = document.getElementById("closeBtn");
const editButton = document.getElementById("editButton");

//function open popup

let isPopupVisible = false;

editButton.addEventListener("click", function () {
  if (isPopupVisible) {
    popup.style.display = "none";
    isPopupVisible = false;
  } else {
    popup.style.display = "block";
    isPopupVisible = true;
  }
});

//function closepopup

//function openPopup() {
// popup.classList.add("open-popup");
//}
//function closePopup() {
// popup.classList.remove("open-popup");
//}

function savePopup() {
  const usernameInput = document.getElementById("username");
  const userTextInput = document.getElementById("usertext");
  const profileName = document.getElementById("profileName");
  const profileText = document.getElementById("profileText");

  profileName.textContent = usernameInput.value;
  profileText.textContent = userTextInput.value;

  closePopup();
}
//toggle function for like hearts
const likeButtons = document.querySelectorAll(".heart-off");
for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", function (event) {
    console.log(event);
    event.target.classList.toggle("heart-on");
  });
}
