document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    let isBookmarked = false;
    const bookmarkIcon = document.querySelector('.bookmark');

    function toggleBookmark() {
        isBookmarked = !isBookmarked;
        bookmarkIcon.classList.toggle('bookmarked', isBookmarked);
    }
});
