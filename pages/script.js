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
    saveForm.preventDefault(); 
    saveForm(); 
  });


const heart = document.getElementById("likeImage");

let toggle = true;

heart.addEventListener('click', function toggleImage(){
    toggle = !toggle;

    if (toggle){
        heart.src = '/images/like.png';
    }else {
        heart.src= 'images/blackheart.png';
    }
    
});

   