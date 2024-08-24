
var audio = document.getElementById('audio');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    if(audio.paused){
        audio.play();
        btn.textContent = 'Pause';
    }else{
        audio.pause();
        btn.textContent = 'Play';
    }
    
});



