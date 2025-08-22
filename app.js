// console.log("Kupo!");

//TODO: I need to store my image data

const images = [
    {images: "./Images/Ahmed.jpg", //relative path for local images OR link to the image
        altText: "A single sheet ghost wearing glasses in the forest",
    },
    {images: "./Images/EleanorBrooke.jpg",
        altText: "A couple of sheet ghosts holding hands in the forest",
    },
     {images: "./Images/GiulioFabi1.jpg",
        altText: "A couple of sheet ghosts with hats playing hide and seek amongst some trees",
    },
]
// console.log(images) THESE RETURN! WOO! 


//TODO: I need to create thumbnail images
// Function > createThumbnails
const body = document.querySelector("body");
const thumbnailContainer = document.querySelector(".thumbnailContainer");

// Select the DOM element (thumbnail-container) to contain our thumbnails 
onsole.log(images)
    updateDisplayImage(images[currentImageIndex])
    createThumbnails()


    //THIS IS A REPETITIVE TASK --> Loops through our array using the length property
//loop inside
    for (let image of images){

// - create img element
        const thumbnailImage = document.createElement('img')

// - update src and alt attributes of the img element to match those in the array(PARAMETERS - Manny hint)
        thumbnailImage.setAttribute('src', image.images)
        thumbnailImage.setAttribute('alt', image.altText)

 // - give each img a className (need to make them small. img.className etc)
    thumbnailImage.className = 'thumbnail-image'
    let thumbnails = thumbnailImage('.thumbnailImage');

    // - add an event listener to each image --> the event handle of this listener is the function you write to create large images (MANNY HINT)
    //THINGGOES HERE
        thumbnailImage.addEventListener("click", handleClick);
       // - append the created images to the thumbnail-container
    thumbnailContainer.appendChild(thumbnailImage);
}





//TODO: I need to create my large images
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