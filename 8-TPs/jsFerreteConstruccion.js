/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var alambre;
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);
	perimetro=(largoTerreno*2)+(anchoTerreno*2);
	alambre=(perimetro*3);
	alert("Usted necesita "+alambre+" metros para alambrar con 3 hilos");
}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	perimetro=(radio*2)*3.14;
	alambre=perimetro*3;
	alert("Usted necesita "+alambre+" metros para alambrar con 3 hilos");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var superficie;
	var cemento;
	var cal;
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);
	superficie=largoTerreno*anchoTerreno;
	cemento=superficie*2;
	cal=superficie*3;
	alert("Usted necesita "+cemento+" bolsas de cemento para el contrapiso y "+cal+" bolsas de cal para el contrapiso");
}