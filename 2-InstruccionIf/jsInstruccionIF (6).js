function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;

if(edad<13)
{
	alert("niño");
}
else
{
	if(edad>18)
	{
		alert("mayor");
	}else
	{
		alert("adolescente");
	}
}

/*
if(edad>18)
{
	alert("Usted es Mayor de 18");
}
if(edad>12 && edad<18)
{
	alert("Usted es adolescente");
}
if(edad<13)
{
	alert("Usted es un niño");
}
*/
}//FIN DE LA FUNCIÓN