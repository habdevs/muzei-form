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










const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
  interval: 2000, // Интервал автопрокрутки
  wrap: true // Разрешить циклическую прокрутку
});

// Вы можете использовать методы API для управления каруселью, например:
myCarousel.next(); // Перейти к следующему слайду
myCarousel.prev();
