function Mostrar()
{
var precio1;
var precio2;
var precio3;
var suma;
var promedio;


//tomo los precios por ID y los parseo
	precio1=document.getElementById('precioUno').value;
	precio2=document.getElementById('precioDos').value;
	precio3=document.getElementById('precioTres').value;
		precio1=parseInt(precio1);
		precio2=parseInt(precio2);
		precio3=parseInt(precio3);
//Valido los ingresos
	while (precio1<0 || isNaN(precio1))
			{
				precio1=prompt("Reingrese el precio1");
				precio1=parseInt(precio1);
				document.getElementById('precioUno').value=precio1;
			}
	while (precio2<0 || isNaN(precio2))
			{
				precio2=prompt("Reingrese el precio2");
				precio2=parseInt(precio2);
				document.getElementById('precioDos').value=precio2;
			}
	while (precio3<0 || isNaN(precio3))
			{
				precio3=prompt("Reingrese el precio3");
				precio3=parseInt(precio3);
				document.getElementById('precioTres').value=precio3;
			}
// Muestro los resultados

suma=precio1+precio2+precio3;
promedio=suma/3;

document.write("Los precios son: "+precio1+" "+precio2+" "+precio3);
document.write("<br>La suma es: "+suma);
document.write("<br>El promedio es: "+promedio);

}
