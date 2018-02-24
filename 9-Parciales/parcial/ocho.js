/*
Ingreso de alumnos, no sabemos cuantos, pedir nombre,
y mostrar al final cuantos alumnos ingresaron.
*/
/*
En este archivo conseguir cargar los datos de la edad
el promedio total, el nombre de la mejor nota y de la peor
Los promedios de notas y de edades, cantidad de personas
por sexo y buscar varios tipos de combinacion de datos.
*/
function Mostrar()
{
	var nombre;
	var nota;
	var contador;
	var promedio;
	var seguir;
	var acumuladorDeNotas;
	var sexo;
	var contadorDeMujeres;
	var contadorDeVarones;

	acumuladorDeNotas=0;
	seguir="";
	contador=0;
	promedio=0;
	acumuladorDeNotas=0;
	contadorDeMujeres=0;
	contadorDeVarones=0;

	while (seguir!="no")
	{
		contador=contador+1;
		nombre=prompt("ingrese su nombre :");
		nota=prompt("Ingrese su nota: ");
		nota=parseInt(nota);
		while (nota<0 || nota>10)
			{
			nota=prompt("Ingrese su nota: ");
			nota=parseInt(nota);
			}
		sexo=prompt("Ingrese se sexo f o m");
			while (sexo !="f" && sexo !="m")
			{
				sexo=prompt("Ingrese se sexo f o m");
			}
			if (sexo=="f")
				{
				contadorDeMujeres=contadorDeMujeres+1;
				}
			else
				{
				contadorDeVarones=contadorDeVarones+1;	
				}
		
		
		seguir=prompt("Ingrese no para salir");
		acumuladorDeNotas=acumuladorDeNotas+nota;

	}

	promedio=acumuladorDeNotas/contador;
	document.write("La cantidad de alumnos es "+contador);
	document.write("<br>El promedio es :"+promedio);
	document.write("<br> La cantidad de Mujeres es: "+contadorDeMujeres);
	document.write("<br> La cantidad de Varones es: "+contadorDeVarones);
}

/*
var nombre;
var cantidad=0;
var seguir="";
var nota;
var notas;
var promedio;
nota=0;

while (seguir != "no")
{
	cantidad = cantidad +1;
	nombre=prompt("Ingrese su nombre");
	nota=prompt("Ingrese su nota");
	nota=parseInt(nota);
	while (nota<0 || nota>10)
	{
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
	}
	notas=notas+nota;
	seguir = prompt("no para salir");
}
document.write("Son :"+cantidad+" de alumnos");
promedio=nota/cantidad;
document.write("El promedio es :"+promedio);
*/