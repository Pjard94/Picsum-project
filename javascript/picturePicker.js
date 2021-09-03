const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;
const emailInput = document.getElementById('picum-email');
const applyButton = document.getElementById('picture-apply');
const rerollButton = document.getElementById('picture-reroll');
const picHolder = document.getElementById('picture-display');
const url = 'https://picsum.photos/';
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

window.addEventListener('load', function() {
    let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
    picHolder.src=url + picsumValue;
})

rerollButton.addEventListener('click', function(){
    let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
    picHolder.src=url + picsumValue;
})

applyButton.addEventListener('click', function validateEmail(){
    if(emailREGEX.test(emailInput.value) == true){
        let emailAddress = emailInput.value;
        newPFP = picHolder.src;
        for(let i = 0; i < profile.length; i++){
            if( profile.indexOf(emailAddress) == i) {
                previousEntry = true;
                arrayPosition = i;
                profiles[i].push(newPFP);
                document.getElementById(emailAddress).appendChild(document.createElement("img"));
                document.getElementById(emailAddress).lastChild.setAttribute('src', newPFP);
            }
        }
        if(previousEntry === false) {
            profile.push(emailAddress)
            profileStart.push(emailAddress);
            profileStart.push(newPFP);
            profiles.push(profileStart);
            profileStart = [];
            document.getElementById('submissions').appendChild(document.createElement("div"));
            document.getElementById('submissions').lastChild.setAttribute('id', emailAddress);
            document.getElementById('submissions').lastChild.classList.add('userSubmissions');
            document.getElementById(emailAddress).appendChild(document.createElement("h3"));
            document.getElementById(emailAddress).lastChild.append(emailAddress)
            document.getElementById(emailAddress).appendChild(document.createElement("img"));
            document.getElementById(emailAddress).lastChild.setAttribute('src', newPFP);
        }

        let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
        picHolder.src=url + picsumValue;
    } else {
        alert("Please fill a with a valid Email Address");
    }
    previousEntry = false;
});