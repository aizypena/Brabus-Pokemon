
// Get the button element
const buyTicketBtn = document.querySelector('.buy-ticket-btn');

// Add click event listener
buyTicketBtn.addEventListener('click', function () {
    // URL to open in new tab
    const url = 'https://tickets.nianticlabs.com/events/#/login?returnUrl=%2Feventlisting&appId=pgo'; // Replace 'https://example.com' with your desired URL

    // Open the URL in a new tab
    window.open(url, '_blank');
});
