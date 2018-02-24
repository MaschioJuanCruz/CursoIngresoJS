function Mostrar()
{
var importeDiario;
var importeMayor;
var importeMenor;
var importe;
importeDiario = 0;
importeMayor = 0;
importeMenor = 0;
importe = 0;

while (importe<24)
{
	importeDiario=prompt("Ingrese el monto del día"+importe);
	importeDiario=parseInt(importeDiario);
		if (importeDiario >0)
		{
			if (importeDiario<importeMayor)
			{
				importeMayor = importeDiario;
			}
			if (importeDiario>importeMenor)
			{
				importeMenor = importeDiario;
			}
		}
	importe=importe++
}
document.write("El importe Mayor es :"+importeMayor+"<br> El importe Menor es : "+importeMenor);
}
