/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

var celsiusTemp = 33;
var celsiusToF = (celsiusTemp * 9)/5 + 32;
alert(celsiusTemp + "°C is " + celsiusToF + " °F ");
var fahrenheitTemp = 33;
var fahrenheitToC = (fahrenheitTemp * 5)/9;
 alert(fahrenheitTemp + "°F is " + fahrenheitToC + " °C ");
