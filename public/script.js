const audio = document.querySelector('audio');
const playPauseBtn = Document.querySelector('#play-pause');
const nextBtn = Document.querySelector('#next');
const preveBtn = Document.querySelector('#previous');
const songList = document.querySelector('.song-list');
const title = document.querySelector('#title');
const record = document.querySelector('.record');
const volSlider = document.querySelector('.slider')

let songArray = [];
let songHeading = '';
let songIndex = 0;
let isPlaying = false;

function loadAudio(){
    audio.src = songArray[songIndex];

    let songListItems = songList.getElementsByTagName('li');
    songHeading = songListItems[songIndex].getAttribute('data-name');
    title.innerText = songHeading;

    //Highligth
    for(i=0;i<songListItems.length;i++){
        songListItems[i].classList.remove('active');
    }

    songList.getElementsByTagName('li')[songIndex].classList.add('active');
}

function loadSongs(){
    let songs = songList.getElementsByTagName('li');
    for(i=0;i<songs.length;i++){
        songArray.push(songs[i].getAttribute('data-src'));
    }

    loadAudio();
}

loadSongs();