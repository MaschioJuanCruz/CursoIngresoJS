function Mostrar()
{
var numero1;
var numero2;
var suma;

//Pido los datos y los parseo
	numero1=prompt("Ingrese un número: ");
	numero2=prompt("Ingrese el segundo número: ");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
// Valido los datos
	while (isNaN(numero1))
		{
			numero1=prompt("Ingrese un número: ");
			numero1=parseInt(numero1);
		}
	while (isNaN(numero2))
		{
			numero2=prompt("Ingrese el segundo número: ");
			numero2=parseInt(numero2);
		}
//Calculo y Muestro los resultados
suma=numero1+numero2;
	if (suma==0)
	{
		document.write("La suma es igual a 0");
	}
	if (suma<0)
	{
		document.write("La suma es menor a 0");
	}
	if (suma>0)
	{
		document.write("La suma es Mayor a 0");
	}
}
//Si valido con if me ratifica el dato 2 veces y plancha