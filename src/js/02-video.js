
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoplayerCurrentTime = 'videoplayer-current-time';
console.log(videoplayerCurrentTime);
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const getSavedTime = localStorage.getItem(videoplayerCurrentTime);
console.log(getSavedTime)
const player = new Player(iframe);
console.log(player)

/* if (getSavedTime) {
    player.setCurrentTime(getSavedTime);
  }
  
  player.on('timeupdate', throttle(onTimeUpdate, 1000));
  
  function onTimeUpdate(time) {
    let savedPausedPlayerTime = time.seconds;
    localStorage.setItem(videoplayerCurrentTime, savedPausedPlayerTime);
  }
  console.log(onTimeUpdate) */