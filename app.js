//DOM accessing
const audio = document.querySelector("audio");
const imageBox = document.querySelector(".image")
const images = document.querySelector(".img");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const playBtn = document.querySelector(".bx-play");
const backBtn = document.querySelector("#back");
const forwardBtn = document.querySelector("#forward");
const txt = document.querySelector("p")
let i = 0;
let isPlaying = false;
//songs list and content
const list = [
    {
        songName: "Permission To Dance",
        songArtist: "BTS",
        source: "songs/permission_to_dance.mp3",
        poster: "posters/permission_to_dance.png"
    },
    {
        songName: "Positions",
        songArtist: "Ariana Grande",
        source: "songs/positions.mp3",
        poster: "posters/positions.png"
    },
    {
        songName: "That's What I Like",
        songArtist: "Bruno Mars",
        source: "songs/thats_ what_ i_like.mp3",
        poster: "posters/thats what i like.jpg"
    },
    {
        songName: "Selfish love",
        songArtist: "DJ Snake ft Selena Gomez",
        source: "songs/selfish_love.mp3",
        poster: "posters/selfish love.png"
    },
    {
        songName: "Wow",
        songArtist: "Post Malone",
        source: "songs/wow.mp3",
        poster: "posters/wow.png"
    }
]
//functions
function playSong() {
    isPlaying = true;
     audio.play();
     playBtn.classList.add("bx-pause")
     playBtn.classList.remove("bx-play");
}
function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.classList.remove("bx-pause")
    playBtn.classList.add("bx-play");
}
function loadSongs(list) {
    title.innerHTML = list.songName;
    artist.innerHTML = list.songArtist;
    audio.src = list.source;
    images.src = list.poster;
    txt.innerHTML = `Song 0${i+1}`
}
function nextSong() {
    i++;
    if(i > list.length - 1) {
        i = 0;
    }
    loadSongs(list[i])
    audio.play();
    imageBox.classList.add('anim');
    playSong();
}
function prevSong() {
    i--;
    if(i < 0) {
        i = list.length - 1;
    }
    loadSongs(list[i]);
    audio.play();
    imageBox.classList.add('anim');
    playSong()
}
//calling the functions
playBtn.addEventListener("click",() => {
    !isPlaying ? playSong() : pauseSong();
    imageBox.classList.toggle("anim");
});
forwardBtn.addEventListener("click",nextSong)
backBtn.addEventListener("click",prevSong)
//load the main function
loadSongs(list[i]);