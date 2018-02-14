/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldoBase;
	var aumento;
	var sueldoConAumento;
	sueldoBase = document.getElementById('sueldo').value;
	sueldoBase = parseInt(sueldoBase);
	aumento=sueldoBase/100*10;
	sueldoConAumento = sueldoBase+aumento;
	document.getElementById('resultado').value = sueldoConAumento;
	
}
