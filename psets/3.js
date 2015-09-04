/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 18;
var pi = 3.141592
var circumference = radius * 2*pi;
alert("The circumference is " + circumference);
var area = pi * Math.pow(radius, 2);
alert("The area is " + area);
