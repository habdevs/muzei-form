document.addEventListener('DOMContentLoaded', function() {
  let formCheckInputs = document.querySelectorAll('.form-check-input');
  let payButton = document.getElementById('payButton');
  
  formCheckInputs.forEach(function(input) {
    input.addEventListener('click', function() {
      if (!input.disabled) {
        formCheckInputs.forEach(function(el) {
          el.parentElement.classList.remove('checked');
          payButton.removeAttribute('disabled');
        });
        input.parentElement.classList.add('checked');
        const tabTarget = input.getAttribute('data-tab-target');
        showTextDescription(tabTarget);
      }
    });
  });
  
  window.addEventListener('load', function() {
    console.log('Страница загружена, ставим дизейбл оплаты');
    payButton.setAttribute('disabled', 'disabled');
  });
  
  document.addEventListener('click', function(event) {
    // Проверяем чтобы клик был сделан не на элементах формы
    if (!event.target.closest('#payButton') && !event.target.closest('.form-check-input') && !event.target.closest('.text-description') && !event.target.closest('.form-check-input[disabled]')) {
      // ремув элемента формы
      formCheckInputs.forEach(function(input) {
        input.parentElement.classList.remove('checked');
      });
      // возвращаем дизейбл кнопку оплаты
      payButton.setAttribute('disabled', 'disabled');
      // ресет описание текста
      showTextDescription(null); // передаем null для ресета
    }
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
  
});





// const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
//   interval: 2000,
//   wrap: true
// });
//
// myCarousel.next();
// myCarousel.prev();
