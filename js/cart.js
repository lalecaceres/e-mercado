//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function verCarro(obj){
    let carroo="";
    carroo=`
    <a href="obj-info.html" class="list-group-item list-group-item-action">
        <div class="row ">
            <div class="col-3 ">
                <img src="` + obj.src + `" alt="` + obj.unitCost + `" class="img-thumbnail">
            </div>
            <div class="col ">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ obj.name +`</h4>
                    <small class="text-muted">` + obj.count + ` artículos</small>
                </div>
                <p class="mb-1">` + obj.currency + `</p>
            </div>
        </div>
    </a>
    `
    document.getElementById('card').innerHTML += carroo;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if(resultObj.status === 'ok'){
            let carrito=resultObj.data;
            for(let i=0 ; i<carrito.articles.length; i++){
                verCarro(carrito.articles[i]);
            };
        }
    })
});