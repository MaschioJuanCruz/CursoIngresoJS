/*
el nombre del animal
pedir el peso del animal mayor a 0
la temperatura del habitat del animal entre -40 y + 40
informar cantidad de temmperaturas pares ingresadas
las imprares ingresadas
el nombre del animal mas pesado
el nombre del animal menos pesado
la cantidad de animales cuyo habitat tiene menos de 0 grados
el promedio de peso de todos los animnales
la temperatira maxima y minima ingresada
*****Agregar un contador para inicializar las asignaciones de los pesos y los nombres****
*/


function Mostrar()
{
var contador;
var salir;
var animal;
var pesoAnimal;
var temperaturaHabitat;
var tempPares;
var tempImprares;
var nombrepesado;
var nombreLiviano;
var masPesado;
var menosPesado;
var menosDeCero;
var promedioDePeso;
var tempMaxima;
var tempMinima;
salir="no";

while (salir!="si")
{
	//Pido nombre del animal
	animal=prompt("Ingrese el nombre del animal");
	//Pido y parseo el peso
	pesoAnimal=prompt("Ingrese el peso del animal");
	pesoAnimal=parseInt(pesoAnimal)
;		while (pesoAnimal<=0 || isNaN(pesoAnimal))
		{
			pesoAnimal=prompt("Ingrese el peso del animal");
			pesoAnimal=parseInt(pesoAnimal);
		}
		//Comparo el peso máximo
		if (pesoAnimal>masPesado)
		{
			masPesado=pesoAnimal;
			nombrepesado=animal;
		}
	//Comparo el peso minimo
		if (pesoAnimal<menosPesado)
		{
			menosPesado=pesoAnimal;
			nombreLiviano=animal;
		}
	//Pido y parseo la tempteratura
	temperaturaHabitat=prompt("Ingrese la temperatura del Habitat entre -40 y 40 grados");
	temperaturaHabitat=parseInt(temperaturaHabitat);
		while (temperaturaHabitat<-40 || temperaturaHabitat>40 || isNaN(temperaturaHabitat))
			{
			temperaturaHabitat=prompt("Ingrese la temperatura del Habitat entre -40 y 40 grados");
			temperaturaHabitat=parseInt(temperaturaHabitat);
			}
	//Pregunto si quiere salir
	salir=prompt("Desea Salir escriba si/no");
}
	document.write("El animal mas pesado es :"+nombrepesado);
	document.write(" Con un peso de : "+masPesado);
	document.write("<br>El animal mas liviano es :"+nombreLiviano);
	document.write("con un peso de : "+menosPesado);
}
