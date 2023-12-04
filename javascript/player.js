

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const film = params.get('film');
    const title = params.get('title');
    
    if (film) {
        playFilm(`${film}`, title);
    }
});

function playFilm(source, title) {
    const videoSource = document.getElementById('videoSource');
    videoSource.src = source;
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.load();
    videoPlayer.play();

    const movieTitle = document.getElementById('movieTitle');
    movieTitle.textContent = title;
}