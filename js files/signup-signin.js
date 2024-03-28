const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});


var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity("Password Match!");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


document.getElementById('inGameName').addEventListener('input', function () {
    let inGameName = this.value.trim();
    if (inGameName !== '') {
        generatePlayerID(inGameName);
    } else {
        document.getElementById('playerID').value = '';
    }
});


function generatePlayerID(inGameName) {
    // Remove non-numeric characters from inGameName
    inGameName = inGameName.replace(/\D/g, '');

    // If inGameName is less than 12 characters, pad it with random numbers to make it 12 characters long
    if (inGameName.length < 12) {
        let randomNumber = '';
        for (let i = 0; i < 12 - inGameName.length; i++) {
            randomNumber += Math.floor(Math.random() * 10); // Generate random numbers
        }
        inGameName += randomNumber;
    } else {
        // If inGameName is longer than 12 characters, take the first 12 characters
        inGameName = inGameName.substring(0, 12);
    }

    // Format the playerID as #### #### ####
    let playerID = '';
    for (let i = 0; i < 12; i += 4) {
        playerID += inGameName.substring(i, i + 4) + ' ';
    }
    playerID = playerID.trim(); // Remove trailing whitespace

    // Set the playerID value to the generated ID
    document.getElementById('playerID').value = playerID;
}



document.getElementById('sign-up-btn').addEventListener('click', function () {
    var pokeball = document.querySelector('.pokeball');
    pokeball.classList.add('animate-pokeball'); // Add the animation class
    pokeball.style.display = 'block'; // Ensure the Pokeball is visible
});

document.getElementById('sign-in-btn').addEventListener('click', function () {
    var pokeball = document.querySelector('.pokeball');
    pokeball.classList.remove('animate-pokeball'); // Remove the animation class
});

