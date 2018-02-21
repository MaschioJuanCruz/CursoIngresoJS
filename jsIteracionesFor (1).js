function Mostrar()
{
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contador50=0;

	for(contador=-100;contador<100;contador++)
	{
		if(contador>0)
		{
			contadorDePositivos++
		}
		else
		{
			if(contador<0)
			{
				contadorDeNegativos++;
			}
			else
			{
				contadorDeCeros++;
			}
		}
		if(contador%2==0 && contador!=0) //Cuenta los pares
		{
			contadorDePar++;
		}
		else
		{
			if(contador!=0) //Cuenta los impares
			{
				contadorDeImpar++;
			}
		}

		switch(contador) //Cuenta cuantas veces aparece el 50
		{
			case 50:
			contador50++;
			break;

		}

	}
	document.write("positivos "+contadorDePositivos);
	document.write("<br>negativos "+contadorDeNegativos);
	document.write("<br>ceros "+contadorDeCeros);
	document.write("<br>pares "+contadorDePar);
	document.write("<br>impares "+contadorDeImpar);
	document.write("<br>de 50 "+contador50);

}






/*	for(;;) //Muestra de como iteractuar y al cumplir una condición
			//anidada regresa al ciclo for de inico
	{
		contador++
		document.write("<br>"+contador);
		if(contador==10)
		{
			document.write("break"+contador);
			break;
		}
		if (contador==5)
		{	
			continue;
		}
			document.write("continue"+contador);
	}
}*/



/*
function Mostrar()
{
var numeros;
numeros=1;
for(numeros=1;numeros<11;numeros++)
	{
		document.write("Numeros :"+numeros+"<br>");
	}
}
*/