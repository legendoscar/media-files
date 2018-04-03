
function doFirst() {
    barSize=600;
    /* Capturing the html elements as js variables */
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    bar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');

    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);
}
 function playOrPause () {
     if (!myMovie.paused && !myMovie.ended) //That means the video is playing
     {
         myMovie.pause(); //Pause the video
         playButton.innerHTML='Play'; //Change the pause button to play
         window.clearInterval(updateBar); //as the video is paused, stop updating the progress bar       
     }
     else{
         /** that means the video is paused */
        myMovie.play(); // a click on the button plays the video
        playButton.innerHTML='Pause'; //Change the play button to pause
        updateBar=setInterval(update, 500);

     }
 }
 function update() {
     if(!myMovie.ended) {
          //if it is playing/ has not ended
     var size = parseInt(myMovie.currentTime*barSize/myMovie.duration); //Gets the size of the progress bar
     progressBar.style.width=size+'px'; //captures the html and css elements
 } else{
     progressBar.style.width='0px';
     playButton.innerHTML='Play';
     window.clearInterval(updateBar);

 }
}
function clickedBar (e){
    if(!myMovie.paused && !myMovie.ended){
        var mouseX = e.pageX-bar.offsetLeft; 
//this determines the mouse position on the x-axis. the offsetLeft shows the distance of the bar from the left hand side
        var newtime = mouseX*myMovie.duration/barSize;
        myMovie.currentTime=newtime;
        progressBar.style.width=mouseX+'px';
    }
}
window.addEventListener('load', doFirst, false);