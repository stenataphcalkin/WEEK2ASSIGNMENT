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

createLargeImageHandler(0);

// this task is the event handler for the thumbnail events
// function createLargeImagesHandler(){
// select the large-image-container
// delete the current image in the large-image-container (Actual code below)
// largeImageContainer.innerHTML = null OR """
// create an image
// update the SRC and alt values
// add a className for styling
// append the img to the container
// LOOPS ARE NOT. REPEAT. NOT. NEEDED FOR THIS ONE.
//Add this event handler to the thumbnail event
//make sure you call the createThumbnails function

//-----------------------------------------------------------------------------------------------------------------------------------------
//THUMBNAIL TASK
// Select the DOM element (thumbnail-container) to contain our thumbnails
// updateDisplayImage(images[currentImageIndex])
// createThumbnails()
//THIS IS A REPETITIVE TASK --> Loops through our array using the length property
//loop inside
// - create img element
// - update src and alt attributes of the img element to match those in the array(PARAMETERS - Manny hint)
// - give each img a className (need to make them small. img.className etc)
// let thumbnails = thumbnailImage('.thumbnailImage');
// - add an event listener to each image --> the event handle of this listener is the function you write to create large images (MANNY HINT)
// - append the created images to the thumbnail-container
// thumbnailContainer.appendChild(thumbnailImage);
//
