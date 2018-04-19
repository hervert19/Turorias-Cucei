function  validar()
{
  var codigo,correo;
	correo = document.getElementById('user').value;
	codigo = document.getElementById('pass').value;
  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@alumnos\.udg+\.mx/;
  var expresion2 = /^([0-9])*$/;
  if(correo === "" || codigo === "" )
  {
    swal('Oops...','Todos los campos deben de ser llenados!','error')
    return false;
  }
  if (!expresion.test(correo))
  {
    document.getElementById("anuncio1").style.color="#FFA500";
    document.getElementById("anuncio1").innerHTML="Introduce tu correo de alumno";
    document.getElementById("anuncio1").style.display="block";

    document.getElementById("anuncio2").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    return false;
  }
  if (!expresion2.test(codigo))
  {
    document.getElementById("anuncio2").style.color="#FFA500";
    document.getElementById("anuncio2").innerHTML="Introduce tu codigo de siiau";
    document.getElementById("anuncio2").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio3").style.display="none";
    return false;
  }
  if (codigo.length != 9)
  {
    document.getElementById("anuncio3").innerHTML="Introduce tu codigo a 9 digitos";
    document.getElementById("anuncio3").style.display="block";
    document.getElementById("anuncio1").style.display="none";
    document.getElementById("anuncio2").style.display="none";
    return false;
  }
}
