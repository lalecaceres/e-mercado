//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('enviar').addEventListener('click', function () { //al hacer click tira la funcion guiado por el id 
    var usuario = document.getElementById("name").value;
    var Contraseña = document.getElementById("password").value;

    if (usuario.length == 0 || Contraseña.length == 0) {
      document.getElementById("nada").classList.remove('invalid-feedback');
      document.getElementById("nada").innerHTML="*Por favor ingresa sus datos para ingresar."
      
    } else if (usuario == "lale123" && Contraseña == "1234") {
      localStorage.setItem('User', usuario); //ingresa al local storage y le agrega un valor (toma 2 parametro clave y valor)
      location.href = "inicio.html";
    } else {
      document.getElementById("nada").classList.remove('invalid-feedback');
      document.getElementById("nada").innerHTML="*Por favor ingresa la contraseña correcta o revise su Usuario."
    }
  })
});
