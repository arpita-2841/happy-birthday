// Run as soon as the DOM finishes setting up
document.addEventListener("DOMContentLoaded", function() {
    // Read which specific gift option was chosen from local storage
    const activeGift = localStorage.getItem('openedGift');

    // Make sure we clear any open frames first
    hideAllViews();

    // Map specific layout views directly to choices
    if (activeGift === 'letter') {
        document.getElementById('view-letter').classList.remove('hidden');
    } else if (activeGift === 'video') {
        document.getElementById('view-video').classList.remove('hidden');
    } else if (activeGift === 'songs') {
        document.getElementById('view-songs').classList.remove('hidden');
    } else if (activeGift === 'reasons') {
        document.getElementById('view-reasons').classList.remove('hidden');
    } else {
        // Safe fall back if something breaks
        window.location.href = 'page2.html';
    }
});

function hideAllViews() {
    document.getElementById('view-letter').classList.add('hidden');
    document.getElementById('view-video').classList.add('hidden');
    document.getElementById('view-songs').classList.add('hidden');
    document.getElementById('view-reasons').classList.add('hidden');
}