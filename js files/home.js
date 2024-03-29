document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and payment divs
    const gcashBtn = document.querySelector(".gcash-btn");
    const cardBtn = document.querySelector(".card-btn");
    const gcashPayment = document.querySelector(".gcash-payment");
    const cardPayment = document.querySelector(".card-payment");

    // Show the gcash-payment div by default
    gcashPayment.style.display = "block";
    cardPayment.style.display = "none";

    // Add event listeners to the buttons
    gcashBtn.addEventListener("click", function () {
        gcashPayment.style.display = "block";
        cardPayment.style.display = "none";
    });

    cardBtn.addEventListener("click", function () {
        gcashPayment.style.display = "none";
        cardPayment.style.display = "block";
    });
});