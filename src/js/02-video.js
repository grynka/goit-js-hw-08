import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

const onPlay = function (timeupdate) {
localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeupdate.seconds)
    );
};

const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);





