import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(player);

const onTimeUpdate = currentTime => {
  const time = currentTime.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};

const savedCurrentTime = localStorage.getItem('videoplayer-current-time');

if (savedCurrentTime) {
  player.setCurrentTime(savedCurrentTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));
