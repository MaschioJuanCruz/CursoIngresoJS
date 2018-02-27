function Mostrar()
{
var importe;
var descuento;
var precioFinal;
descuento=0.25;


//Pido el importe
importe=prompt("Ingrese el importe :");
importe=parseInt(importe);

//Valido el importe
while (importe<0 || isNaN(importe))
		{
			importe=prompt("Ingrese el importe :");
			importe=parseInt(importe);			
		}
precioFinal=importe-(importe*descuento);
//precioFinal=importe-(importe/100*25);
document.getElementById('importeFinal').value=precioFinal;
/*
La validación no funciona si se ingresa un número seguido de una letra
Si se inicializa la variable descuento en 0,25 toma valor 0
*/
}
