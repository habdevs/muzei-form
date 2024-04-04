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
  let formCheckLabels = document.querySelectorAll('.form-check-label');
  
  formCheckLabels.forEach(function(label) {
    label.addEventListener('click', function() {
      formCheckLabels.forEach(function(el) {
        el.classList.remove('checked');
      });
      label.classList.add('checked');
    });
  });
});
