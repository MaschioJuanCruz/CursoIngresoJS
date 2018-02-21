

// Buscar el github de algun compañero y analizar el código funcional
function Mostrar()
{
	var numeroRandom=0;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;

		for (contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10);
			switch(numeroRandom)
				{
				case 0:
				contador0++;
				break;
				case 1:
				contador1++;
				break;
				case 2:
				contador2++;
				break;
				case 3:
				contador3++;
				break;
				case 4:
				contador4++;
				break;
				case 5:
				contador5++;
				break;
				case 6:
				contador6++;
				break;
				case 7:
				contador7++;
				break;
				case 8:
				contador8++;
				break;
				case 9:
				contador9++;
				break;
			}//switch numeroRandom
		//document.write("<br>"+numeroRandom);
	}
	document.write("0: " +contador0);
	document.write("<br>1: " +contador1);
	document.write("<br>2: " +contador2);
	document.write("<br>3: " +contador3);
	document.write("<br>4: " +contador4);
	document.write("<br>5: " +contador5);
	document.write("<br>6: " +contador6);
	document.write("<br>7: " +contador7);
	document.write("<br>8: " +contador8);
	document.write("<br>9: " +contador9);
}
// para tratar de comprander
//Mostrar porcentaje de apariciones de cada numero
/*
porcen0=(contador0/(contador+1))*100;
porcen0=(porcen0);
docuemnt.write(porcen0)
*/