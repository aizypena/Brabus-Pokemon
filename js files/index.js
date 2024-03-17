
//LOOPING THE VIDEO IN THE HOMEPAGE
var video = document.getElementById("pokemon-vid");

// Function to check if the video has ended
function checkVideoEnded() {
    if (video.ended) {
        video.currentTime = 0;
        video.play();
    }
}

video.addEventListener("ended", checkVideoEnded);
