// Add event listeners to all cards
document.querySelectorAll('.gift-card').forEach(function(card) {
    card.addEventListener('click', function() {
        // Find out which specific card type was clicked (letter, video, songs, or reasons)
        const selectedGift = this.getAttribute('data-card');
        
        // Save the choice in local storage so Page 3 knows what to show
        localStorage.setItem('openedGift', selectedGift);
        
        // Redirect seamlessly to the content display page
        window.location.href = 'page3.html';
    });
});