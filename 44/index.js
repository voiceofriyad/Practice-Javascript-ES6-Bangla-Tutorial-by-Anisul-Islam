try{
    alert("Hi");
    alert(x); 
}
catch(er){
    alert("Inside catch block");
    document.write(er + "<br />");
    document.write(er.name + "<br />");
    document.write(er.message + "<br />");
}
finally{
    alert("Bye");
}