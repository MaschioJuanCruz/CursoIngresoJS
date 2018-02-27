/* Ingresar una letra y un número entre -50 y +50, informar el promedio
de los números positivos, la cantidad de números impares, la suma de todos
los número cuya letra haya sido una vocal, el número más alto y la
letra con la que se ingreso*/

function Mostrar()
{
var letra;
var numero;
var contadorDeNumeros;
var sumaDeNumeros;
var promedio;
var impares;
var numerosConVocal;
var numeroMasAlto;
var continuar;
contadorDeNumeros=0;
continuar=" ";
sumaDeNumeros=0;
promedio=0;

while (continuar!="no")
{
letra=prompt("Ingrese una letra :");
numero=prompt("Ahora ingrese un número entre -50 y 50 para la letra "+letra);
numero=parseInt(numero);
	while (numero<(-50) || numero>50 || isNaN(numero))
	{
		numero=prompt("Ahora ingrese un número entre -50 y 50 para la letra "+letra);
		numero=parseInt(numero);
	}
		if (numero>0)
	{
		sumaDeNumeros=sumaDeNumeros+numero;
		contadorDeNumeros=contadorDeNumeros++;
	}
	continuar=prompt("Ingrese no si desea terminar");
}
promedio=contadorDeNumeros/sumaDeNumeros;
document.write("El promedio es :"+promedio);
//alert(" "+letra+" "+numero);
}
