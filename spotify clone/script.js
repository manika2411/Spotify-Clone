const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const songs = ["song1.mp3", "song2.mp3", "song3.mp3"]; 
let currentSongIndex = 0;
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) 
    {
        audio.play();
        playPauseBtn.innerHTML = '<img src="pause.svg" alt="Pause" width="30">';
    }
    else 
    {
        audio.pause();
        playPauseBtn.innerHTML = '<img src="play.svg" alt="Play" width="30">';
    }
});
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBtn.innerHTML = '<img src="pause.svg" alt="Pause" width="30">';
});
prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBtn.innerHTML = '<img src="pause.svg" alt="Pause" width="30">';
});
const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;  
});
audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});
audio.addEventListener("loadedmetadata", () => {
    document.getElementById("song-title").innerText = songs[currentSongIndex];
    document.getElementById("duration").innerText = formatTime(audio.duration);
});
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}