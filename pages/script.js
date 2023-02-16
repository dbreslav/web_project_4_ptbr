const editButton = document.querySelector('.profile__edit');
const popUp = document.querySelector('.pop-up');

editButton.addEventListener('click', () => {
  popUp.classList.toggle('visible');
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