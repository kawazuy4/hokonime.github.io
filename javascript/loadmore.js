document.addEventListener("DOMContentLoaded", function () {
    const moviesGrid = document.getElementById("moviesGrid");
    const toggleButton = document.getElementById("toggleButton");
    const allMovies = document.querySelectorAll(".movie-card");
    const initialVisibleMovies = 7;

    let isExpanded = false;

    function toggleMovies() {
        isExpanded = !isExpanded;

        if (isExpanded) {
            moviesGrid.classList.add("show-all");
            toggleButton.textContent = "See Less";
            allMovies.forEach(movie => {
                movie.style.display = "block";
            });
        } else {
            moviesGrid.classList.remove("show-all");
            toggleButton.textContent = "Load More...";
            for (let i = initialVisibleMovies; i < allMovies.length; i++) {
                allMovies[i].style.display = "none";
            }
        }
    }

    toggleButton.addEventListener("click", toggleMovies);

    // Initially hide movies beyond initialVisibleMovies
    for (let i = initialVisibleMovies; i < allMovies.length; i++) {
        allMovies[i].style.display = "none";
    }
});
