console.log("Kupo!");

//TODO: I need to store my image data
//Can use images stored locally or remotely
const images = ["url", "url", "url"];
const alts = ["alt", "alt", "alt"];

const images1exampleonly = [
    {url: "url1", //relative path for local images OR link to the image
        altText: "altText1",
    },
    {url: "url2",
        altText: "altText2",
    },
     {url: "url3",
        altText: "altText3",
    },
];







//TODO: I need to create thumbnail images
//REPLACE WITH ACTUAL CODE -->
//each line is meant to be a line of code below

// Function > createThumbnails
// Select the DOM element (thumbnail-container) to contain our thumbnails 
//THIS IS A REPETITIVE TASK --> Loops through our array using the length property
//loop inside
// - create img element
// - update src and alt attributes of the img element to match those in the array(PARAMETERS - Manny hint)
// - give each img a className (need to make them small. img.className etc)
// - add an event listener to each image --> the event handle of this listener is the function you write to create large images (MANNY HINT)
// - append the created images to the thumbnail-container







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
//} LOOPS ARE NOT. REPEAT. NOT. NEEDED FOR THIS ONE.

//Add this event handler to the thumbnail event
// make sure you call the createThumbnails function