import "@vimeo/player";

 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

const moment = 0;
console.log(moment);
     

 const onPlay = function (data) {
     moment = data.currentTime;

 };

 player.on('play', onPlay);