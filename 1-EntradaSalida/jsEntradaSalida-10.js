/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importeOriginal;
	var descuento;
	var importeFinal;
	importeOriginal=document.getElementById('importe').value;
	importeOriginal=parseInt(importeOriginal);
	descuento=importeOriginal/100*25;
	importeFinal=importeOriginal-descuento;
	document.getElementById('resultado').value=importeFinal;
}
