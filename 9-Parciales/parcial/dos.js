function Mostrar()
{
var precio;
var descuento;
var valorFinal;

precio=prompt("Ingrese el precio del producto");
descuento=prompt("Ingrese el descuento a realizar");
precio=parseInt(precio);
descuento=parseInt(descuento);
valorFinal=precio-(precio/100)*descuento;
document.getElementById('importeFinal').value=valorFinal;
}
