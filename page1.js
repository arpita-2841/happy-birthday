// Grab the elements we need to control
const balloonContainer = document.getElementById('balloon-container');
const videoOverlay = document.getElementById('video-overlay');
const birthdayVideo = document.getElementById('birthday-video');
const giftPopup = document.getElementById('gift-popup');
const catch_it=document.getElementById("catch_it")

// Step 1: When balloon is clicked, hide balloon and open the phone video
balloonContainer.addEventListener('click', function() {
    balloonContainer.classList.add('hidden'); // Stop and remove balloon
    catch_it.classList.add("hidden");
    videoOverlay.classList.remove('hidden');  // Reveal video player area
    birthdayVideo.play();                     // Auto-start your video
});

// Step 2: Listen for when the video naturally finishes playing
birthdayVideo.addEventListener('ended', function() {
    videoOverlay.classList.add('hidden');    // Clear the video frame away
    giftPopup.classList.remove('hidden');     // Instantly show the "gifts for you" popup
});