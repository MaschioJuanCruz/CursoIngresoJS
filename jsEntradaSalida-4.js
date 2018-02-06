/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre = prompt ("Por favor ingresa tu nombre ");
	document.getElementById('elNombre').value = nombre
}
/* Cuando en un getElement del comando nombre la variable
nombre se coloca antes del document el contenido del campo
se asigna a la variable, si la variable se pone al final,
el contenido de la variable se muestra en el cuadro de diálogo*/

