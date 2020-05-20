for(var i = 0; i < 3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;

        audioplay(text);    
        playAnimation(text);
       
    });

}

document.addEventListener("keypress", function(event){
    var text = event.key;
    audioplay(text);   
    playAnimation(text);

});

function audioplay(text){
    switch(text){
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


function playAnimation(text){
    var selectedButton  =  document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    }, 5000);

}





var count = 0;

document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var text =  event.key;

    document.querySelector("p").innerHTML = "You have pressed " + count;
});
