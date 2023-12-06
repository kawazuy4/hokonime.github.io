

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const film = params.get('film');
    const title = params.get('title');
    const synopsis = params.get('synopsis');
    
    if (film) {
        playFilm(`${film}`, title, synopsis);
    }
});

function playFilm(source, title, synopsis) {
    const videoSource = document.getElementById('videoSource');
    videoSource.src = source;
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.load();
    videoPlayer.play();

    const movieTitle = document.getElementById('movieTitle');
    const movieSynopsis = document.getElementById('movieSynopsis');
    movieTitle.textContent = title;
    movieSynopsis.textContent = synopsis
}