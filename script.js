function setRatingForElement(element, ratingValue) {
    const ratingPercentage = (ratingValue / 5) * 100;
    element.querySelector('.star-filling').style.width = `${ratingPercentage}%`;
  }
  
  // Установка рейтинга для каждого элемента при загрузке страницы
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.star-rating').forEach(function(starRatingEl) {
      const ratingValue = parseFloat(starRatingEl.getAttribute('data-rating'));
      setRatingForElement(starRatingEl, ratingValue);
    });
  });

  console.log("hi")