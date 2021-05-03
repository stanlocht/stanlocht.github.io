var audioPaused = true;
audio = new Audio('media/4weken.mp3');

function playAudio(url) {
    
    if (audioPaused) {
        audio.play();
        audioPaused = !audioPaused;
        console.log('sadfasd')
    } else {
        audio.pause();
        audioPaused = !audioPaused;
    }
  }


  $( document ).ready(function() {
    console.log( "ready!" );
    window.scrollTo(window.innerWidth/ 2, 0);
});