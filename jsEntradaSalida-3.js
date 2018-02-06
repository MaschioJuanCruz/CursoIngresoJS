/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
/*La sentencia document referencia el html que aloja el contenido
del archivo java
La sentencia document usa el argumento get para levantar datos del html padre, 
con tabulador autocompleta el argumento sugerido, con shift y el inicio
del nombre del campo autocompleta el campo que se quiere referenciar*/
	var nombre;
	nombre=document.getElementById('elNombre').value;
	alert(nombre);
}


