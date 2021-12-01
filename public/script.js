const audio = document.querySelector('audio');
const playPauseBtn = document.querySelector('#play-pause');
const nextBtn = document.querySelector('#next');
const preveBtn = ocument.querySelector('#previous');
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
    for(i=0; i<songListItems.length;i++){
        songListItems[i].classList.remove('active');
    }

    songList.getElementsByTagName('li')[songIndex].classList.add('active');
}

function loadSongs(){
    let songs = songList.getElementsByTagName('li');
    for(i=0;i<songs.length;i++){
        songArray.push(songs[i].getAttribute('data-src'));
    };

    loadAudio();
}

loadSongs();

function playAudio(){
    audio.play();
    playPauseBtn.querySelector('i.fas').classList.remove('fa-play');
    playPauseBtn.querySelector('i.fas').classList.add('fa-pause');
    isPlaying = true;
    record.classList.add('record-animation');
}

function pauseAudio(){
    audio.pause();
    playPauseBtn.querySelector('i.fas').classList.remove('fa-pause');
    playPauseBtn.querySelector('i.fas').classList.add('fa-play');
    isPlaying = false;
    record.classList.remove('record-animation');
}

playPauseBtn.addEventListener('click', function(){
    if(isPlaying){
        pauseAudio();
    }
    else{
        playAudio();
    }

}, false);
