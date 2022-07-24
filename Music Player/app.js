const widthChange = document.getElementById('widthChange');
const start = document.getElementById('start')
const play = document.getElementById('play');
const audio = document.getElementById('audio');
const imgs = document.querySelector('img');
const forw = document.getElementById('forw');
const changename = document.getElementById('changename');
isPlayOrnot = false;
data = [{
    name: 'Lauv - I like me better',
    src: 'Lauv - I like me better.mp3',
}, {
    name: 'Alec Benjamin - Let Me Down Slowly',
    src: 'Alec Benjamin - Let Me Down Slowly.mp3',
}, {
    name: 'Abhi Abhi (Jism ) - K.K - 320Kbps',
    src: 'Abhi Abhi (Jism ) - K.K - 320Kbps.mp3',
}]
songIndex = 0;
loadmusic = (i) => {
    songIndex = (songIndex + 1) % 3;
    changename.innerText = data[songIndex].name;
    audio.src = data[songIndex].src;
}
loadmusicprev = (i) => {
    if (songIndex == 0) {
        songIndex = 2;
    } else {
        songIndex -= 1;
    }
    changename.innerText = data[songIndex].name;
    audio.src = data[songIndex].src;
}
loadmusic(songIndex);
playmusic = (() => {
    isPlayOrnot = true;
    audio.play();
    play.classList.replace('fa-play', 'fa-pause');
    imgs.classList.add('anime');
});
pausemusic = (() => {
    isPlayOrnot = false;
    audio.pause();
    play.classList.replace('fa-pause', 'fa-play');
    imgs.classList.remove('anime');
})
play.addEventListener('click', function() {
    if (isPlayOrnot) {
        pausemusic();
    } else {
        playmusic();
    }
});
forw.addEventListener('click', () => {
    loadmusic(songIndex);
    pausemusic();
    playmusic();
})
prev.addEventListener('click', () => {
    loadmusicprev(songIndex);
    pausemusic();
    playmusic();

})
index = 0;
setInterval(function() {
    if (isPlayOrnot && index != 100) {
        widthChange.style.width = audio.currentTime / 1.6978 + "%";
        start.innerText = (parseInt(audio.currentTime / 60) < 10 ? "0" + parseInt(audio.currentTime / 60) : parseInt(audio.currentTime / 60)) + ":" + (parseInt(audio.currentTime % 60) < 10 ? "0" + parseInt(audio.currentTime % 60) : parseInt(audio.currentTime % 60));
    }
}, 1000);