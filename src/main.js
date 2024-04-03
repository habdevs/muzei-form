window.selectRadioCard = function(cardNo) {
  const allRadioCards = document.querySelectorAll(".radio-card");
  allRadioCards.forEach((element, index) => {
    element.classList.remove("selected");
  });
  
  const selectedCard = document.querySelector(".radio-card-" + cardNo);
  selectedCard.classList.add("selected");
  
  const selectedText = document.querySelector(".text-center-" + cardNo);
  if (selectedText) {
    selectedText.classList.add("selected");
  }
  console.log('CARD', selectedCard);
};
