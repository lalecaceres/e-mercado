//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const url_product = "https://japdevdep.github.io/ecommerce-api/product/all.json"



document.addEventListener("DOMContentLoaded", function (e) {


    document.getElementById("info").innerHTML = "";

    fetch(url_product) /*llama la url definida arriba*/

        .then(respuesta => respuesta.json()) /*llama al json */

        .then(datos => {

            datos.forEach(datos => {/*revisa cada variable para devolver la informacion*/

                let ventas = "";
                ventas = `
                <div class="col-s-12 col-md-6 col-lg-4 tablita">
          <a href="cart.html" class="card mb-4 shadow-sm custom-card">
          <img class="bd-placeholder-img card-img-top "w-100"" src="`+ datos.imgSrc + `">
        <h3 class="m-2 align-items-center">` + datos.name + `</h3>
        <div class="card-body row align-text-center">
            <p class="card-text col-md-6">`+ datos.description + `</p>
            <p class="card-text col-md-4" >` + datos.currency +" "+ datos.cost + `</p>
            <p class="card-text col-md-2 panel-info " > Stock  <br>` + datos.soldCount + `</p>
        </div>
    </a>
</div> `;

                document.getElementById("info").innerHTML += ventas; /*agrega la informacion a la tabla */
            });
        })

        .catch(error => alert("Hubo un error: " + error));

});


