var audioPaused = true;
var currentSong = '';
var audio = new Audio('media/4weken.mp3')

function playAudio(url) {
    if (currentSong != url) {
        audio.pause();
        audio = new Audio(url);
        currentSong = url;
        audioPaused = true;
    } 

    if (audioPaused) {
        audio.play();
        audioPaused = false;
    } else {
        audio.pause();
        audioPaused = true;
    }

}


// $(document).ready(function () {
//     window.scrollTo(window.innerWidth / 1.5, 0);
// });


$( document ).ready(function() {
    document.getElementById('center').scrollIntoView({ inline: 'center' });
  });


// function onYouTubeIframeAPIReady() {
//     console.log('yayay')
//     const player = new YT.Player('ytplayer')

//     $('#zeekoe').on('hide.bs.modal', () => {
//       player.pauseVideo()
//     })
// };
