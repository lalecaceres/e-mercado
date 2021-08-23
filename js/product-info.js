//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const url_product="https://japdevdep.github.io/ecommerce-api/product/all.json"


document.addEventListener("DOMContentLoaded", function(e){


    document.getElementById("info").innerHTML = "";

    fetch(autos_url) /*llama la url definida arriba*/

        .then(respuesta => respuesta.json()) /*llama al json */

        .then(datos => {
          
            datos.forEach(datos => {/*revisa cada variable para devolver la informacion*/
                            
            let row = "";
            row = `
                <tr>
                    <td> ` + datos.name + ` </td>
                    <td> ` + datos.description + ` </td>
                    <td> ` + datos.cost + `</td>
                    <td> ` + datos.imgSrc + `</td>
                </tr>
                `;
            
            document.getElementById("info").innerHTML += row; /*agrega la informacion a la tabla */
        });
})

           .catch (error => alert("Hubo un error: " + error));

});