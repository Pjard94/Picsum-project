const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;
const emailInput = document.getElementById('picum-email');
const applyButton = document.getElementById('picture-apply');
const rerollButton = document.getElementById('picture-reroll');
const picHolder = document.getElementById('picture-display');
const url = 'https://picsum.photos/';
let newPFP;
let emailAddress;
let previousEntry = false;

// Arrays
let profile = [];
let profilePictures = [
]

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
        console.log(emailAddress);
        let newPFP = picHolder.src;
        console.log(newPFP)
        for(let i = 0; i < profile.length; i++){
            if( profile.indexOf(emailAddress) !== -1) {
                previousEntry = true;
                console.log(profile[i])
            }
        }
        if(previousEntry === false) {
            profile.push(emailAddress)
        }
        console.log(profile)


        let picsumValue = Math.floor((Math.random() * (270 - 250 + 1)) + 250);
        picHolder.src=url + picsumValue;
    } else {
        alert("Please fill a with a valid Email Address");
    }
    previousEntry = false;
});