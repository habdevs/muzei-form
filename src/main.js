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

window.selectCard = function(cardNo) {
  const selectedInput = document.querySelector(`#exampleRadios${cardNo}`);
  if (selectedInput && selectedInput.disabled) {
    return;
  }
  
  const allDescriptions = document.querySelectorAll('.text-description');
  allDescriptions.forEach((description) => {
    description.classList.remove('selected');
  });
  
  const selectedDescription = document.querySelector(`#exampleRadios${cardNo}`).closest('.form-check').querySelector('.text-description');
  selectedDescription.classList.add('selected');
};


