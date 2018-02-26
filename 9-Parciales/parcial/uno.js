
function Mostrar()
{
var base;
var altura;
var perimetro;
var superficie;

base=document.getElementById('laBase').value;
base=parseInt(base);
altura=prompt("Ahora ingrese la altura");
altura=parseInt(altura);

perimetro=base*3;
alert("El perímetro del triángulo equilátero es :"+perimetro);
superficie=(base*altura)/2;
alert("la superficie del triángulo equilátero es "+superficie);
}
