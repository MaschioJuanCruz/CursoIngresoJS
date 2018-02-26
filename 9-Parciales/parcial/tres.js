function Mostrar()
{
var largo;
var ancho;
var perimetro;
var alambre;

largo=document.getElementById('alrgo').value;
largo=parseInt(largo);
ancho=document.getElementById('ancho').value;
ancho=parseInt(ancho);

perimetro=largo*2+ancho*2;
alambre=perimetro*3;
alert("Se necesitan "+alambre+" mts. de alambre para alambrar con 3 hilos");
}
