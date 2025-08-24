# WEEK2ASSIGNMENT

# Reflection

This assignment required the use of all three languages so far, but more of a focus on CSS and JS, with the later proving to be much more of a challenge. The drafting up of the gallery proved to be particularly infuriating as someone with neurodiversities as the task meant that there was no progressive updates at each stage like there would be with editing HTML, which had me stressed that the correct code was not working and hoped to see an update with each line, and wasn't until everything in the skeleton was completed was I able to see any progress.

Sam, whilst in class, helped to reassure me/my code by reminding that I could console.log the images to show that the in-progress was working.

However, between that initial set up, and the attempts at the stretch goals, it did quite feel like doing an escape room and you think you've got an answer, and then have to rotate through every variable for that situation to get it to complete. I can see how ARIA, Srcsets work and I can visualise the functions I want to implement for keybinds, however, I stepped back from those after the initial attempts and will revisit this later.

Due to the ratio of the images when this was previously set to fill the full viewport size and resize distorting dimensions, I wanted to set it to that the images were centralised in the page and able to be viewed in full in the correct ratio.

Got myself stuck on the event listener a few times by forgetting to write in function in some lines.

Struggled to find resources to comprehensively explain the navigation buttons without use of elements we weren't using like lightboxes. Eventually located resources on StackOverflow and codingartistweb. Furthered knowledge by being able to loop the navigation buttons round rather than stopping at image 0 and 5 before needing to use the other button to go back/forwards, which is a personal irk, so this was very much approved of and has been saved to my resource index.

# Requirements met:

✔ - Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).

✔ - Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).

✔ - Ensure all images have appropriate alt text attributes for accessibility.

✔ - Correctly use event handlers to switch images based on user interactions.

## Other implementations

I managed to find some tools through the week for CSS including CSS gradients, and wanted to give the images an aethereal glow to fit the theme of the ghosts.

To highlight interactivity on desktop, I changed the cursor to pointer when hovering over the thumbnails.

# Stretch Goal

🏹 _Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience._

- Attempted, threw multiple issues such as not rendering the page, or providing only the low-res image on all screen sizes.

🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.

- Attempted, but couldn't see how to implement. Removed.

🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.

- Looked at it, and felt a bit daunted. Passed up for now.

🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

# Bugs / Errors encountered

Weirdly, had to flash NVM 22 again in this project. Had this last week when cloning a project.

Had a conflict when trying to clone then push to github, but thankfully managed to resolve.

Attempted to implement srcset but when doing so I ended up causing the entire page to go white and not render.

Attempted to implement srcset, but it instead pulled the lower resolution images no matter what size.

Attempted to give the thumbnail selector a background, but when trying to position it it'd extend covering half the screen, but leave the other half uncovered, or it'd misalign on the otherside of the screen when the reposition took place. Removed.

Gave myself a headache trying image of images /similar which did not work and instead went back to i < images.length, which worked.

## Going forward:

Try to play around more with any javascript sandboxes and commands, get used to trying to create things whilst being presented with no visual feedback to minimise the "ITS ALL GOING WRONG" brain gremlins until I can SEE that something is wrong, and work on it.

Be a bit more proactive in the Discord calls and asking for help in there.

## Outside of Class Resources

- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Markdown Live Preview](https://markdownlivepreview.com/)

- [MDN](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com)
- [w3C](https://www.w3.org/)
- [CSS Gradient](https://cssgradient.io/)
- [CSS Tricks](https://css-tricks.com/)
- [Gemini](https://gemini.google.com) - for locating typos and mismatched casing on classes etc. This was my most frequent issue.
- [CodingArtistWeb](https://codingartistweb.com/)
- [StackOverflow](https://stackoverflow.com/questions/65553058/next-prev-button-for-modal-with-javascript)

## Photos granted by:

- [Shaylyn](https://unsplash.com/@mpadb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Eleanor Brookes](https://unsplash.com/@eleanorbrooke?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Ahmed](https://unsplash.com/@mutecevvil?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Reagen Freeman](https://unsplash.com/@rfree19?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Giulio Fabi](https://unsplash.com/@giuliofabi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
