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

  console.log("hi");


  const specialAt = document.querySelector("#special__at");
  const checkbox = document.querySelector(".checkbox");
  const geoPosition = document.querySelector("#geoPosition");
  const about__geoinfo = document.querySelector(".about__geoinfo");
  const about__item = document.querySelectorAll(".about__item");
  
  specialAt.addEventListener("click",()=>{
      checkbox.classList.toggle("active");
  });
  geoPosition.addEventListener("click",()=>{
    about__geoinfo.classList.toggle("active");
});
about__item.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.toggle("active");
    });
});

