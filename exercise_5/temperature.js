function celsiusToFahrenheit(celsius)
{
var cTemp = celsius;
var fahrenheit = (cTemp * 9/5) + 32;
console.log(celsius + 'is' + fahrenheit);
}
celsiusToFahrenheit(50.5);

function fToC(fahrenheit) {
var fTemp = fahrenheit;
var celsius = (fTemp - 32) * 5 / 9;
console.log( fahrenheit + 'is' + celsius);

}
fToC(60);