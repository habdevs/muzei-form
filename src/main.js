document.addEventListener('DOMContentLoaded', function() {
  let formCheckInputs = document.querySelectorAll('.form-check-input');
  
  formCheckInputs.forEach(function(input) {
    input.addEventListener('click', function() {
      if (!input.disabled) {
        formCheckInputs.forEach(function(el) {
          el.parentElement.classList.remove('checked');
        });
        input.parentElement.classList.add('checked');
        const tabTarget = input.getAttribute('data-tab-target');
        showTextDescription(tabTarget);
      }
    });
  });
});

function showTextDescription(tabTarget) {
  const allTextDescriptions = document.querySelectorAll('.text-description');
  allTextDescriptions.forEach(function(description) {
    description.classList.remove('selected');
  });
  const selectedTextDescription = document.getElementById(tabTarget);
  if (selectedTextDescription) {
    selectedTextDescription.classList.add('selected');
  }
}



