var number = [10,20,30,40];

for(var x=0; x < number.length; x++)
{
    document.write(number[x] + "<br />");
}


number.forEach(myFunction)
function myFunction(x)
{
    document.write(x + "<br />");
}



number.forEach(function(x){
    document.write(x + "<br />");
});



var squareNumbers = [];
number.forEach(function(x){
    squareNumbers.push(x*x);    
});
document.write(squareNumbers + "<br />");


number.forEach(function(x,index,arr){
    arr[index] = x + 5;
});
document.write(number + "<br />");




