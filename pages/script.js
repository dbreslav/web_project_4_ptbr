let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
};



function savePopup() {
    const usernameInput = document.getElementById('username');
    const userTextInput = document.getElementById('usertext');
    const profileName = document.getElementById('profileName');
    const profileText = document.getElementById('profileText');
  
    profileName.textContent = usernameInput.value;
    profileText.textContent = userTextInput.value;
  
    closePopup();
  }
  



  function toggleLikeButton(event) {
    console.log(event);
event.target.classList.toggle('card__like_btn-on');
    
      
    }
  
  
  
  
  



   