document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById('resetButton');
    const genreDropdown = document.querySelector('.filter-bar .genre');
    const yearDropdown = document.querySelector('.filter-bar .year');
    const radioButtons = document.querySelectorAll('input[name="grade"]');
    const movieCards = document.querySelectorAll('.movie-card');
    let isExpanded = false;

    resetButton.addEventListener('click', function () {
        // Reset dropdowns to their initial state
        genreDropdown.selectedIndex = 0;
        yearDropdown.selectedIndex = 0;

        // Uncheck all radio buttons
        radioButtons.forEach(radio => {
            radio.checked = false;
        });

        for (let i = 0; i < movieCards.length; i++) {
            if (i < 7) {
                movieCards[i].style.display = "block";
            } else {
                movieCards[i].style.display = "none";
            }
        }
    });
});
