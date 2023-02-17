let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
};

});



const heart = document.querySelectorAll("card__like_btn");

heart.forEach(function(heart) {
    heart.addEventListener('click', function() {
      const image = heart.querySelector('img');
      if (image.src.endsWith('like.png')) {
        image.src = './images/blackheart.png';
      } else {
        image.src = './images/like.png';
      }
    });
  });