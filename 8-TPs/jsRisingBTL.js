/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
var edad;
var sexo;
var estadoCivil;
var sueldoBruto;
var numeroDeLegajo;
var nacionalidad;
//Ingreso y valido edad
edad=prompt("Ingrese su edad debe ser entre 18 y 90 años inclusive");
edad=parseInt(edad);
	while (edad<18 || edad>90 || isNaN(edad))
		{
		edad=prompt("Ingrese su edad debe ser entre 18 y 90 años inclusive");
		edad=parseInt(edad);
		}
//Ingreso y valido sexo
sexo=prompt("Ingrese su sexo - F = fememnino o M = masculino");
	while (sexo!="F" && sexo!="M")
		{
			sexo=prompt("Ingrese su sexo - F = fememnino o M = masculino");
		}
//Ingreso y valido estado civil
estadoCivil=prompt("Ingrese 1 si es Soltero, 2 si es Casado, 3 si es Divorsiado o 4 si es Viudo");
estadoCivil=parseInt(estadoCivil);
	while (estadoCivil!=1 && estadoCivil!=2 && estadoCivil!=3 && estadoCivil!=4)
		{
		estadoCivil=prompt("Ingrese 1 si es Soltero, 2 si es Casado, 3 si es Divorsiado o 4 si es Viudo");
		estadoCivil=parseInt(estadoCivil);
		}
		if (estadoCivil=1)
		{
			estadoCivil="Soltero"
		}else if (estadoCivil=2)
			{
				estadoCivil="Casado"
			}
		else if (estadoCivil=3)
		{
			estadoCivil="divorciado"
		}
		else
		{
			estadoCivil="Viudo"
		}
	
//Ingreso y valido Sueldo Bruto
	sueldoBruto=prompt("Ingrese su sueldo bruto No menor a 8.000 $");
	sueldoBruto=parseInt(sueldoBruto);
		while (sueldoBruto<8000 || isNaN(sueldoBruto))
		{
		sueldoBruto=prompt("Ingrese su sueldo bruto No menor a 8.000 $");
		sueldoBruto=parseInt(sueldoBruto);
		}
	
//Ingreso y valido Legajo
numeroDeLegajo=prompt("ingrese su numero de legajo ");
numeroDeLegajo=parseInt(numeroDeLegajo);
	while (numeroDeLegajo<1000 || numeroDeLegajo>9999 || isNaN(numeroDeLegajo))
	{
	numeroDeLegajo=prompt("ingrese su numero de legajo ");
	numeroDeLegajo=parseInt(numeroDeLegajo);
	}

//Ingreso y valido Nacionalidad
nacionalidad=prompt("Ingrese su Nacionalidad A para Argentino, E para Extranjero o N para Nacionalizados");
	while (nacionalidad!=A && nacionalidad!=E && nacionalidad!=N)
	{
		nacionalidad=prompt("Ingrese su Nacionalidad A para Argentino, E para Extranjero o N para Nacionalizados");
	}

document.getElementById('Edad').value=edad;
document.getElementById('Sexo').value=sexo;
document.getElementById('EstadoCivil').value=estadoCivil;
document.getElementById('Sueldo').value=sueldoBruto;
document.getElementById('Legajo').value=numeroDeLegajo;
document.getElementById('Nacionalidad').value=nacionalidad;
}
