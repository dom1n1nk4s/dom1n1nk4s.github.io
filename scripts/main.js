function quack(){
    var audio = new Audio('sounds/quack.mp3');
    audio.play();
}
function anim(){
    var elem = document.getElementById("animation");
    var ogSize = parseInt(window.getComputedStyle(elem).fontSize.slice(0,-2));
    var dSize = ogSize;
    console.log(ogSize);
    var positiveInc;
    var id = setInterval(frame, 15);
    function frame(){
        
        if(dSize == ogSize + 10){
            positiveInc = false;
        }
        else if(dSize == ogSize - 10)
            positiveInc = true;
        if(positiveInc)
            dSize++;
        else
            dSize--;

        elem.style.fontSize = dSize + 'px';
    }
}
anim();