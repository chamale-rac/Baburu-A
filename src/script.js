document.getElementById('playButton').addEventListener('click', function() {
    var audio = new Audio("/assets/audio/jump.mp3"); 
    audio.play();
});

document.getElementById('closeButton').addEventListener('click', function() {
    window.close();
});