document.addEventListener("DOMContentLoaded", function () {
  const parallaxContainer = document.querySelector(".parallax");
  const parallaxImages = parallaxContainer.querySelectorAll("img");

  window.addEventListener("scroll", function () {
    const containerTop = parallaxContainer.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;

    parallaxImages.forEach(function (image, index) {
      const elementTop = image.getBoundingClientRect().top;
      const offset = elementTop - containerTop;
      const translateY = (offset - scrollPosition) * 0.3; // Adjust the multiplier for speed
      image.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  });
});


