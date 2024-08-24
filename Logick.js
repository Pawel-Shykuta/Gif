

var audio = document.getElementById('audio');
var btn = document.getElementById('playPause');



btn.addEventListener('click', function(){
    if(audio.paused){
        audio.play();
        btn.textContent='Pause'
    }else{
        audio.pause();
        btn.textContent = 'Paly';
    }


});




var h1 = document.getElementsByClassName('text')[0];
var gif = document.getElementById('Gif');
var size = 20;


var windowWidth=window.innerWidth;
if(windowWidth<=450){
    size = 90;
}else{
    size = 20
}


gif.addEventListener('click', Big);
h1.addEventListener('click', Big);
function Big(){
    if(size >= 110){
        window.location = "Second.html";
    }
    size += 5;
    gif.style.width = size + '%';
}
