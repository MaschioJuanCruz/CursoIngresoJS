//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*Se ingresan dos numeriosm si son iguales se concatenan
si el primero es mayor que el segundo se multiplocan
si el segundo es mas grande se restan 
si la multiplicacion es par ademas se muesrtra el 
mensaje es par*/

function Mostrar()
{
var primero;
var segundo;
var resultado;

primero=prompt("Ingrese el primer numero");
primero=parseInt(primero);
	while (isNaN(primero))
	{
		primero=prompt("Ingrese el primer numero");
		primero=parseInt(primero);
	}
segundo=prompt("Ingrese el segundo numero");
segundo=parseInt(segundo);
	while(isNaN(segundo))
	{
	segundo=prompt("Ingrese el segundo numero");
	segundo=parseInt(segundo);
	}
	if (primero==segundo)
	{
		resultado=primero+""+segundo;
	}else if (primero>segundo)
	{
		resultado=(primero*segundo);
		if (resultado%2==0)
		{
			prompt("la multiplicación es :"+resultado+" es par");
		}
	}else if (primero<segundo)
	{
		resultado=primero-segundo;
	}
prompt(+resultado);
}

