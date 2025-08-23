//TODO: I need to store my image data
const images = [
  {
    images: "./Images/Ahmed.jpg",
    altText: "A single sheet ghost wearing glasses in the forest",
  },
  {
    images: "./Images/EleanorBrooke.jpg",
    altText: "A couple of sheet ghosts holding hands in the forest",
  },
  {
    images: "./Images/GiulioFabi1.jpg",
    altText:
      "A couple of sheet ghosts with hats playing hide and seek amongst some trees",
  },
];
// console.log(images) THESE RETURN! WOO!

//TODO: I need to create thumbnail images
function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < images.length; i++) {
    const thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute("src", images[i].images);
    thumbnailImage.setAttribute("alt", images[i].altText);
    thumbnailImage.className = "thumbnail-image";

    thumbnailImage.addEventListener("click", function () {
      createLargeImageHandler(i);
    });

    thumbnailContainer.appendChild(thumbnailImage);
  }
}

createThumbnails();

//TODO: I need to create my large images
function createLargeImageHandler(i) {
  const largeImageContainer = document.getElementById("large-image-container");
  largeImageContainer.innerHTML = "";
  const img = document.createElement("img");
  img.setAttribute("src", images[i].images);
  img.setAttribute("alt", images[i].altText);
  img.classList.add("largeImage");
  largeImageContainer.appendChild(img);
}

createLargeImageHandler(0);

// Requirements
// ✅ Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).
// ✅ Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).
// ✅ Ensure all images have appropriate alt text attributes for accessibility.
// ✅ Correctly use event handlers to switch images based on user interactions.
