const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;
// My element selectors
const emailInput = document.getElementById('picum-email');
const applyButton = document.getElementById('picture-apply');
const rerollButton = document.getElementById('picture-reroll');
const picHolder = document.getElementById('picture-display');
// The url for shorthand
const url = 'https://picsum.photos/';
// empty variables to be used later in the code
var newPFP;
let pictureID;
let emailAddress;
let previousEntry = false;
let arrayPosition;
let insidePosition;

// Arrays
let profileStart = [];
let profiles = [];
let profile = [];

// Loads an image as the page loads
window.addEventListener('load', function() {
    let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
    picHolder.src=url + picsumValue;
}) 

// Loads a new image when the button is pressed
rerollButton.addEventListener('click', function(){
    let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
    picHolder.src=url + picsumValue;
})

// This will registar the submission and create areas for the images as well as submitting the new images later.
applyButton.addEventListener('click', function validateEmail(){
    // This confirms that the email is valid.
    if(emailREGEX.test(emailInput.value) == true){
        let emailAddress = emailInput.value;
        newPFP = picHolder.src;
        for(let i = 0; i < profile.length; i++){
            // This attaches a new image and puts it in the div connected with the name.
            if( profile.indexOf(emailAddress) == i) {
                previousEntry = true;
                arrayPosition = i;
                profiles[i].push(newPFP);
                document.getElementById(emailAddress).appendChild(document.createElement("img"));
                document.getElementById(emailAddress).lastChild.setAttribute('src', newPFP);
            }
        }
        // this only activates if the email submitted is new, it creates an array entry to be checked against for the repeated submissions, it also creates a newarea for holding the submisssions on the page.
        if(previousEntry === false) {
            profile.push(emailAddress)
            profileStart.push(emailAddress);
            profileStart.push(newPFP);
            profiles.push(profileStart);
            profileStart = [];
            let titleNode = document.createTextNode(emailAddress);
            // Below here it creates the submission areas and adds classes and ID's for styling and easier targeting for creating items.
            document.getElementById('submissions').appendChild(document.createElement("div"));
            document.getElementById('submissions').lastChild.setAttribute('id', emailAddress);
            document.getElementById('submissions').lastChild.classList.add('userSubmissions');
            document.getElementById(emailAddress).appendChild(document.createElement("h3"));
            document.getElementById(emailAddress).lastChild.appendChild(titleNode)
            document.getElementById(emailAddress).appendChild(document.createElement("img"));
            document.getElementById(emailAddress).lastChild.setAttribute('src', newPFP);
        }

        // This part randomises the image once submission is sucessful.
        let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
        picHolder.src=url + picsumValue;
    } else { // This part will activate if the email doesn't pass the REGEX
        alert("Please fill input with a valid Email Address"); 
    }
    // This resets the previous entry value otherwise it'll always read as true.
    previousEntry = false;
});