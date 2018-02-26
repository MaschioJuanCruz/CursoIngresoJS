// Código pedido por el profesor
function Mostrar()
{

var numero1;
var numero2;
var numero3;
var mayor;
var menor;


numero1=prompt("Ingrese el primer numero a calcular");
numero2=prompt("Ingrese el segundo numero a calcular");
numero3=prompt("Ingrese el tercer numero a calcular");
numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

if (numero1>numero2&&numero1>numero3)
{
	mayor=numero1;
}
else if (numero2>numero3)
{
	mayor=numero2;
}else
{
	mayor=numero3;
}

if (numero1<numero2&&numero1<numero3)
{
	menor=numero1;
}
else if (numero2<numero3)
{
	menor=numero2;
}else
{
	menor=numero3;
}

document.write("El mayor es :"+mayor);
document.write("<br> El menor es :"+menor);
}
/*
		Código para el ejercicio enunciado
function Mostrar()
{

var numero1;
var numero2;
var numero3;

var multiplicacion;
var resta;
var suma;

numero1=prompt("Ingrese el primer numero a calcular");
numero2=prompt("Ingrese el segundo numero a calcular");
numero1=parseInt(numero1);
numero2=parseInt(numero2);


if (numero1==numero2)
	{
		multiplicacion=numero1*numero2;
		document.write(+numero1+" multiplicado "+numero2+" es igual a "+multiplicacion);
	}
if (numero1>numero2)
	{
		resta=numero1-numero2;
		document.write(+resta);	
	}
if (numero1<numero2)
	{
		suma=numero1+numero2;
		document.write(+suma);
	}

}
*/