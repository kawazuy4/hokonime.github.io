document.addEventListener("DOMContentLoaded", function () {
    const genreFilter = document.querySelector(".filter-bar .genre");
    const yearFilter = document.querySelector(".filter-bar .year");
    const movieCards = document.querySelectorAll(".movie-card");

    function filterMovies() {
        const selectedGenre = genreFilter.value;
        const selectedYear = yearFilter.value;

        movieCards.forEach(movieCard => {
            const genre = movieCard.getAttribute("data-genre");
            const year = movieCard.getAttribute("data-year");

            const isGenreMatch = selectedGenre === "all genres" || selectedGenre === genre;
            const isYearMatch = selectedYear === "all years" || selectedYear === year;

            if (isGenreMatch && isYearMatch) {
                movieCard.style.display = "block";
            } else {
                movieCard.style.display = "none";
            }
        });
    }

    genreFilter.addEventListener("change", filterMovies);
    yearFilter.addEventListener("change", filterMovies);
});
