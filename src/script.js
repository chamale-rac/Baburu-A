document.getElementById('playButton').addEventListener('click', function() {
    var audio = new Audio("/assets/audio/menu1.mp3"); 
    audio.play(); 
});
const button = document.getElementById('playButton');
      
      // Create a new Audio object for the sound
      const hoverSound = new Audio("/assets/audio/menu1.mp3"); // Path to your sound file

      // Play the sound when mouse enters the button
      button.addEventListener('mouseenter', function() {
        hoverSound.play();
      });

      // Optionally stop the sound when mouse leaves (if you want the sound to stop immediately when mouse leaves)
      button.addEventListener('mouseleave', function() {
        hoverSound.pause(); // Pauses the sound
        hoverSound.currentTime = 0; // Resets the sound to the start
      });
      function delayedAction() {
        console.log('Action executed after delay!');
        alert('This happened after a delay!');
      }     

const button2 = document.getElementById('settingButton');
      
     
      const hoverSound2 = new Audio("/assets/audio/menu1.mp3");

      button2.addEventListener('mouseenter', function() {
        hoverSound2.play();
      });

      button2.addEventListener('mouseleave', function() {
        hoverSound2.pause(); 
        hoverSound2.currentTime = 0; 
      });


const button1 = document.getElementById('closeButton');
      
     
      const hoverSound1 = new Audio("/assets/audio/menu2.mp3");

      button1.addEventListener('mouseenter', function() {
        hoverSound1.play();
      });

      button1.addEventListener('mouseleave', function() {
        hoverSound1.pause(); 
        hoverSound1.currentTime = 0; 
      });


      const sound = new Audio("/assets/audio/main.mp3"); // Path to your sound file

      // Set the sound to loop
      sound.loop = true;
      sound.volume = 0.03;
      // Automatically play the sound as soon as the page loads
      window.addEventListener('load', () => {
        sound.play(); // Start playing the sound in a loop
      });

     
    
     