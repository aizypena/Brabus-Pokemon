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

document.getElementById("mobileForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var mobileNumberInput = document.getElementById("mobileNumber");
    var mobileNumber = mobileNumberInput.value.trim();

    // Regular expression to validate Philippine mobile number format
    var regex = /^(09|\+639)\d{9}$/;

    if (regex.test(mobileNumber)) {
        alert("Valid Philippine mobile number format!");
        // Here you can proceed with further actions if needed
    } else {
        alert("Invalid Philippine mobile number format!");
        mobileNumberInput.focus();
    }
});


//modal
document.addEventListener("DOMContentLoaded", function () {
    const gcashNumberInput = document.getElementById("gcashNumber");
    const gcashPinInput = document.getElementById("gcashPin");
    const paymentForm = document.getElementById("paymentForm");

    function validateGcashNumber() {
        const gcashNumber = gcashNumberInput.value.trim();
        const gcashNumberRegex = /^09\d{9}$/;
        return gcashNumberRegex.test(gcashNumber);
    }

    function validateGcashPin() {
        const gcashPin = gcashPinInput.value.trim();
        const gcashPinRegex = /^\d{4}$/;
        return gcashPinRegex.test(gcashPin);
    }

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        if (!gcashNumberInput.checkValidity() || !gcashPinInput.checkValidity() || !validateGcashNumber() || !validateGcashPin()) {
            alert("Invalid GCash number or PIN. Please check your inputs.");
        } else {
            alert("Purchase successful!");
        }
    });
});