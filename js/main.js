const videoList = [
  "video/uniqlo1.mp4",
  "video/uniqlo2.mp4",
  "video/uniqlo3.mp4"
];

const video = document.getElementById("bgVideo");
const source = video.querySelector("source");
let index = 0;

function fadeOut(el) {
  el.classList.remove("media-visible");
  el.classList.add("media-hidden");
}

function fadeIn(el) {
  el.classList.remove("media-hidden");
  el.classList.add("media-visible");
}

function playVideo() {
  const currentVideo = videoList[index];

  fadeOut(video);
  source.src = currentVideo;
  video.load();

  setTimeout(() => {
    fadeIn(video);
    video.play();
  }, 500);
}

function switchToNext() {
  index++;

  if (index >= videoList.length) {
    index = 0; 
  }

  playVideo();
}


video.onended = switchToNext;


playVideo();
