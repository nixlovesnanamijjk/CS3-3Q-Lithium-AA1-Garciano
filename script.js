let PI = 3.14; 
let radius = 6.378e6; 
let circumferenceSphere, areaSphere, volumeSphere;

circumferenceSphere = 2 * PI * radius;
areaSphere = 4 * PI * Math.pow(radius, 2);
volumeSphere = (4 / 3) * PI * Math.pow(radius, 3);

document.write('The radius of the sphere is '+ radius.toExponential(2) + '<br>');
document.write( 'The circumference is ' + circumferenceSphere.toExponential(2) + '<br>');
document.write('The surface area is ' + areaSphere.toExponential(2) + '<br>');
document.write('The volume is ' + volumeSphere.toExponential(2) + '<br>');

