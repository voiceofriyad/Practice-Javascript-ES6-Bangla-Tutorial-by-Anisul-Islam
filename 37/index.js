for(var i = 0; i < 3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var myAudio = this.innerHTML;

        audioplay(myAudio);        
       
    });

}

function audioplay(myAudio){
    switch(myAudio){
        case "a":
            var audio = new Audio("audio/Linkin Park - A Place For My Head.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("audio/Linkin Park - By Myself.mp3");
            audio.play();
            break;
        
        case "c":
            var audio = new Audio("audio/Linkin Park - Crawling.mp3");
            audio.play();
            break;
    }

}

