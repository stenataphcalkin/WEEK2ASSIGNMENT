//TODO: I need to store my image data
const images = [
  {
    images: "./Images/Ahmed.jpg",
    altText: "A single sheet ghost wearing glasses in the forest",
    // srcset: "./Images/600w/Ahmed600w.jpg, 600w",
  },
  {
    images: "./Images/EleanorBrooke.jpg",
    altText: "A couple of sheet ghosts holding hands in the forest",
    // srcset: "./Images/600w/EleanorBrooke600w.jpg 600w",
  },
  {
    images: "./Images/GiulioFabi1.jpg",
    altText:
      "A couple of sheet ghosts with hats playing hide and seek amongst some trees",
    // srcset: "./Images/600w/GiulioFabi1600w.jpg",
  },
  {
    images: "./Images/ReaganFreeman.jpg",
    altText: "A pair of sheet ghosts under a bridge by the river",
    // srcset: "./Images/600w/ReaganFreeman600w.jpg",
  },
  {
    images: "./Images/Shaylyn1.jpg",
    altText:
      "A gang of sheet ghosts by a log near the start of a beach-side forest",
    // srcset: "./Images/600w/Shaylyn1-600w.jpg",
  },
  {
    images: "./Images/Shaylyn2.jpg",
    altText:
      "A hang of sheet ghosts surrounding and stood on a rock by the beach and woodland. All immitating some kind of band promo photo",
    // srcset: "./Images/600w/Shaylyn2-600w.jpg",
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
    // img.srcset = images[i].srcset;
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
  // img.srcset = images[i].srcset;

  img.classList.add("largeImage");
  largeImageContainer.appendChild(img);
}

createLargeImageHandler(5);
