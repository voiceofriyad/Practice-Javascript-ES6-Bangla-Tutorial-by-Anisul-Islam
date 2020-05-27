var numbers = [2,3,4,5];
var squareNumbers = [];

numbers.forEach(function(x){
    squareNumbers.push(x*x);
});
document.write(squareNumbers + "<br />");


var numbers = [5,10,15,20];
var squareNumbers = numbers.map(function(x){
    return (x*x);
});
document.write(squareNumbers + "<br />");
document.write(numbers + "<br />");




var numbers = [22,31,4,5,35,26,78];
var newNumbers = numbers.filter(function(x){
    return x > 10;
});
document.write(newNumbers + "<br />");
