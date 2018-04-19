function  validar()
{
  var nombre, apellido, telefono , codigo , correo;

  nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
  telefono = document.getElementById('telefono').value;
	correo = document.getElementById('correo').value;
	codigo = document.getElementById('codigo').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@alumnos\.udg+\.mx/;
  var expresion2 = /^([0-9])*$/;

  if(nombre === "" || apellido === "" || telefono === "" || correo === "" || codigo === "" )
  {
    swal('Oops...','Todos los campos deben de ser llenados!','error')
    return false;
  }
  if (nombre.length > 30) {
    document.getElementById("anuncio1").innerHTML="Nombre muy extenso";
    document.getElementById("anuncio1").style.display="block";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  if (apellido.length > 30) {document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio2").innerHTML="Apellido muy extenso";
    document.getElementById("anuncio2").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  if (!expresion2.test(telefono))
  {
    document.getElementById("anuncio3").innerHTML="Introduce con numeros tu telefono";
    document.getElementById("anuncio3").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  if (telefono.length != 10 )
  {
    document.getElementById("anuncio4").innerHTML="Escribe un numero correcto a 10 digitos";
    document.getElementById("anuncio4").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  if (!expresion2.test(codigo))
  {
    document.getElementById("anuncio5").innerHTML="Introduce tu codigo de siiau";
    document.getElementById("anuncio5").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  if (codigo.length != 9)
  {
    document.getElementById("anuncio7").innerHTML="Introduce tu codigo a 9 digitos";
    document.getElementById("anuncio7").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio5").style.display="none";

    return false;
  }
  if (!expresion.test(correo))
  {
    document.getElementById("anuncio6").innerHTML="Introduce tu correo de alumno";
    document.getElementById("anuncio6").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio7").style.display="none";
    return false;
  }
  else if (expresion.test(correo))
  {
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    document.getElementById("anuncio4").style.display="none";
    document.getElementById("anuncio5").style.display="none";
    document.getElementById("anuncio6").style.display="none";
    document.getElementById("anuncio7").style.display="none";
  }
}
