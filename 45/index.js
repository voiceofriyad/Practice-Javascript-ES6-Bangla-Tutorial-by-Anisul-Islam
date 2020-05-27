document.querySelector("#checkButton").addEventListener("click", function(){
    var num = document.querySelector("#numText").value;
    try {
        if(num < 5)
        {
            throw "input is too low"
        } else if(num > 10)
        {
            throw "input is too big"
        }
        
    }catch (error) {
        document.write(error + "<br />");
    }

});