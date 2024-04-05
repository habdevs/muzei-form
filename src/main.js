// window.selectRadioCard = function(cardNo) {
//   const allRadioCards = document.querySelectorAll(".radio-card");
//   allRadioCards.forEach((element, index) => {
//     element.classList.remove("selected");
//   });
//
//   const selectedCard = document.querySelector(".radio-card-" + cardNo);
//   selectedCard.classList.add("selected");
//
//   const selectedText = document.querySelector(".text-center-" + cardNo);
//   if (selectedText) {
//     selectedText.classList.add("selected");
//   }
//   console.log('CARD', selectedCard);
// };

document.addEventListener('DOMContentLoaded', function() {
  let formCheckInputs = document.querySelectorAll('.form-check-input');
  
  formCheckInputs.forEach(function (input) {
    input.addEventListener('click', function () {
      if (!input.disabled) {
        formCheckInputs.forEach(function (el) {
          el.parentElement.classList.remove('checked');
        });
        input.parentElement.classList.add('checked');
      }
    });
  });
});


