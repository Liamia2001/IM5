const images = [
    "Images/400_600_glace4.jpg",
    "Images/400_600_glace3.jpg",
    "Images/400_600_glace2.jpg",
    "Images/400_600_glace1.jpg"
  ];
  
  let i = 0;
  let imageCounter = 0; // Eine Zählervariable hinzufügen, um die Anzahl der geladenen Bilder zu verfolgen
  
  function placeImage(x, y) {
    if (imageCounter < 8) {
      const nextImage = images[i];
  
      const img = document.createElement("img");
      img.setAttribute("src", nextImage);
      img.setAttribute("loading", "lazy"); // Setze das loading-Attribut auf "lazy" für Lazy Loading

  
      const container = document.getElementById('bildgalerie');
      const containerRect = container.getBoundingClientRect();
  
      // Calculate the relative coordinates within the container
      const imgX = x - containerRect.left;
      const imgY = y - containerRect.top;
  
      img.style.left = imgX + "px";
      img.style.top = imgY + "px";
  
      img.style.transform =
        "translate(20%, 20%) scale(0.5) rotate(" +
        (Math.random() * 20 - 10) +
        "deg)";
  
      container.appendChild(img);
  
      i = (i + 1) % images.length;
      imageCounter++;
    }
  }
  
  
  let mouse = 0;
  
  document.addEventListener("mousemove", function (event) {
    event.preventDefault();
    mouse = mouse + 1;
    if (mouse % 20 == 0) {
      placeImage(event.pageX, event.pageY);
    }
  });
  
  document.addEventListener("touchend", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  });