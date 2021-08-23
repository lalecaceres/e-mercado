//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('enviar').addEventListener('click', function(){     //al hacer click tira la funcion guiado por el id 
        var usuario = document.getElementById("name").value;
        var Contraseña = document.getElementById("password").value; 
    
        if (usuario.length == 0 || Contraseña.length == 0) {
        alert('Falta información en uno de los campos')}
        else if (usuario == "lale123" && Contraseña == "1234"){       
          location.href = "inicio.html";
        }
        else {
          alert('Ingrese sus datos correctamente');
        }
    })
});