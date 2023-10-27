const images = [
    "Images/400_600_glace4.jpg",
    "Images/400_600_glace3.jpg",
    "Images/400_600_glace2.jpg",
    "Images/400_600_glace1.jpg"
];

let i = 0;
let imageCounter = 0; // Add a counter variable to track the number of loaded images

// Function to hide the click instruction
function hideClickInstruction() {
    const clickInstruction = document.querySelector(".click-instruction");
    if (clickInstruction) {
        clickInstruction.style.display = "none";
    }
}

function placeImage(x, y) {
    if (imageCounter < 8) {
        if (imageCounter === 0) {
            // Hide the click instruction on the first click
            hideClickInstruction();
        }

        const nextImage = images[i];

        const img = document.createElement("img");
        img.setAttribute("src", nextImage);
        img.setAttribute("loading", "lazy"); // Set the loading attribute to "lazy" for Lazy Loading

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

document.addEventListener("click", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
});

