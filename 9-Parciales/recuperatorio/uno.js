
function Mostrar()
{
var base;
var superficie;

//Pido la base
base=document.getElementById('laBase').value;
base=parseInt(base);

//Valido la base
while (base<0 || isNaN(base))
	{
		base=prompt("No es un número válido, reintentar");
		base=parseInt(base);
	}
//Calculo la superficie
superficie=base*base;

alert("La superficie del cuadrado es :"+superficie+" metros cuadrados");
}
/*
La validación no funciona si se ingresa un número seguido de una letra
*/
