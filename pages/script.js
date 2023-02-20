let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
};


const saveBtn = document.getElementById("save-btn");
const userName = document.getElementById("userName");
const userText = document.getElementById("userText");
const profileName = document.getElementById("profileName");
const profileText = document.getElementById("profileText");

function savePopup() {
  const inputValueUserName = userName.value;
  const inputValueUserText = userText.value;

  profileName.textContent = inputValueUserName;
  profileText.textContent = inputValueUserText;
}
saveBtn.addEventListener('submit', function(savePopup) {
    savePopup.preventDefault(); 
    savePopup(); 
  });


  function toggleLikeButton(event) {
    console.log(event);
event.target.classList.toggle('card__like_btn-on');
    
      
    }
  
  
  
  
  



   