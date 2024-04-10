document.addEventListener('DOMContentLoaded', function () {
  const triggerTabList = [].slice.call(document.querySelectorAll('#pills-tab button'));
  triggerTabList.forEach(function (triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl);
    
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
  
  // Активирует первую вкладку
  const triggerFirstTabEl = document.querySelector('#pills-tab li:first-child button');
  if (triggerFirstTabEl) {
    const tabInstance = new bootstrap.Tab(triggerFirstTabEl);
    tabInstance.show();
  }
});

