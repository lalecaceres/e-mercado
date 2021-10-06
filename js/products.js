//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



var minCount = undefined;
var maxCount = undefined;

function orden(criterio, lista) {
    let result = [];
    if (criterio === 1) {
        result = lista.sort(function (a, b) {
            if (a.cost < b.cost) {
                return -1;
            }
            if (a.cost > b.cost) {
                return 1;
            }
            return 0;
        });
    } else if (criterio === 2) {
        result = lista.sort(function (a, b) {
            if (a.cost > b.cost) {
                return -1;
            }
            if (a.cost < b.cost) {
                return 1;
            }
            return 0;
        });
    } else if (criterio === 3) {
        result = lista.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) {
                return 1;
            }
            if (aCount < bCount) {
                return -1;
            }
            return 0;
        });
    }

    return result;
}

function lista() {
    let ventas = "";

    var texto = document.getElementById("buscar").value.toLowerCase();

    for (let i = 0; i < productos.length; i++) {
        let datos = productos[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(datos.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(datos.cost) <= maxCount))) {

            let nombre = datos.name.toLowerCase();
            if (nombre.indexOf(texto) !== -1) {

                ventas += `
                <div class="col-s-6 col-md-6 col-lg-3 tablita">
                    <a onClick="mostrarProducto(`+datos.id+`)" href="product-info.html" class="over card mb-2 shadow-sm custom-card">
                        <img class="bd-placeholder-img card-img-top "w-100"" src="` + datos.imgSrc + `">
                        <h3 class="m-2 align-items-center">` + datos.name + `</h3>
                        <div class="card-body row align-text-center" id="`+datos.id+`">
                            <p class="card-text col-md-6 opa">` + datos.description + `</p>
                            <div class="card-text col-md-6 opa">
                            <p class="card-text col-md-12 " >` + datos.currency + " " + datos.cost + `</p> <hr>
                            <p class="card-text col-md-12 panel-info bg" > Solo quedan ` + datos.soldCount + ` en Stock </p></div>
                            <button type="button" class=" btn btn-success col-md-5 ">Comprar</button>
                        </div>
                        
                    </a>
                </div> 
                `
  
            }
        }
        document.getElementById("info").innerHTML = ventas; /*agrega la informacion a la tabla */
    }
};
function mostrarProducto(id) {
    localStorage.setItem('producto', id);
}

document.getElementById("buscar").addEventListener('keyup', lista)


document.addEventListener("DOMContentLoaded", function (e) {
    lista();
});




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productos = resultObj.data;
            lista(productos);
        }
    });

    document.getElementById("sinjq").addEventListener("input", function () {
        let selc = document.getElementById("sinjq");
        if (selc.value === "1") {
            productos = orden(1, productos)
            lista()
        };
        if (selc.value === "2") {
            productos = orden(2, productos)
            lista()
        };
        if (selc.value === "3") {
            productos = orden(3, productos)
            lista()
        };
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rMin").value = "";
        document.getElementById("rMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        lista();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rMin").value;
        maxCount = document.getElementById("rMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        } else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        } else {
            maxCount = undefined;
        }

        lista();
    });
});



$(function(){

    
  })
  