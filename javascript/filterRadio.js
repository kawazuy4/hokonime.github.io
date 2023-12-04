document.addEventListener("DOMContentLoaded", function () {
    const genreDropdown = document.querySelector(".filter-bar .genre");
    const yearDropdown = document.querySelector(".filter-bar .year");
    const movieCards = document.querySelectorAll(".movie-card");
    const radios = document.querySelectorAll('input[name="grade"]');

    function filterMoviesByRadio() {
        radios.forEach(radio => {
            radio.addEventListener("change", () => {
                const selectedRadio = document.querySelector('input[name="grade"]:checked').id;
                filterMovieCards(selectedRadio);
            });
        });
    }

    function filterMovieCards(selectedRadio) {
        movieCards.forEach(movieCard => {
            const status = movieCard.getAttribute("data-status");

            genreDropdown.selectedIndex = 0;
            yearDropdown.selectedIndex = 0;
            switch (selectedRadio) {
                case "featured":
                    movieCard.style.display = status === "featured" ? "block" : "none";
                    break;
                case "popular":
                    movieCard.style.display = status === "popular" ? "block" : "none";
                    break;
                case "newest":
                    movieCard.style.display = status === "newest" ? "block" : "none";
                    break;
                default:
                    movieCard.style.display = "block"; // Show all by default
                    break;
            }
        });
    }

    filterMoviesByRadio(); // Initialize radio filter functionality
});