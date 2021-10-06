//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let prod = localStorage.getItem("producto");
let rela = [];
function relacionados(uu) {
    let  content="";
       content = `<a href="product-info.html" onClick="mostrarProducto(${uu.id})" class="card m-2" style="width: 18rem;">
       <img src="${uu.imgSrc}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${uu.name}</h5>
         <p class="card-text">${uu.description}</p>
       </div>
     </a>`;

     document.getElementById("relacionados").innerHTML+=content;
}


function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];
        if(i == 0){
            htmlContentToAppend += `
            <div class="carousel-item active">
          <img class=" w-100" src="` + imageSrc + `" alt="First slide">
        </div>
               `
        }else{
        htmlContentToAppend += `
            <div class="carousel-item ">
          <img class=" w-100" src="` + imageSrc + `" alt="First slide">
        </div> `
        }

        
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(PRODUCT_INFO_URL + prod + ".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            producto = resultObj.data;

            let productNameHTML  = document.getElementById("categoryName");
            let productDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCategory = document.getElementById("productCriteria");
       
            
            
            productNameHTML.innerHTML = producto.name +`<form>
            <p class="clasificacion row justify-content-rigth">
              <input id="radio1" type="radio" name="estrellas" value="1">
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="2">
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3">
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="4">
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="5">
              <label for="radio5">★</label>
            </p>
          </form>`;
            productDescriptionHTML.innerHTML = producto.description;
            productCountHTML.innerHTML = producto.soldCount;
            productCategory.innerHTML = producto.category;
           
            showImagesGallery(producto.images)

            for (let i = 0; i < producto.relatedProducts.length; i++) {
              getJSONData(PRODUCTS_URL).then(function(resultado){
                if (resultObj.status === "ok"){
                  rela = resultado.data;

                  
                  relacionados(rela[producto.relatedProducts[i]]);
                }
              })
            }

        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){

  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {for(let i = 0; i < resultObj.data.length; i++){
      coment= resultObj.data[i];
      
      document.getElementById("comentarios").innerHTML+= `
      <div  class="list-group-item list-group-item-action">
          <div class="row ">
          <div class="col-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg>
        </div>
               <div class="col ">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">@`+ coment.user +`</h4>
                      <small class="text-muted ★">`+"★".repeat( coment.score )+` </small>
                  </div>
                  <p class="mb-1">` + coment.description + `</p>
                  <p class="mb-1">` + coment.dateTime + `</p>
              </div>
          </div>
      </div>
      `

    }}
});

});
document.getElementById('com').addEventListener('click', function(e){

  let comentario = document.getElementById("opinion").value;
  let user= localStorage.getItem('User');
  let hora= new Date();
  let cali=Math.round(Math.random() * (5 - 1) + 1)

  document.getElementById("comentarios").innerHTML+= `
      <div  class="list-group-item list-group-item-action">
          <div class="row ">
          <div class="col-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg>
        </div>
               <div class="col ">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">@`+ user +`</h4>
                      <small class="text-muted">`+"★".repeat( cali )+` </small>
                  </div>
                  <p class="mb-1">` + comentario + `</p>
                  <p class="mb-1">` + hora + `</p>
              </div>
          </div>
      </div>
      `
})





function mos(){
  var can=0;
  if(document.getElementById("radio1").checked){can++};
  if(document.getElementById("radio2").checked){can++};
  if(document.getElementById("radio3").checked){can++};
  if(document.getElementById("radio4").checked){can++};
  if(document.getElementById("radio5").checked){can++};
alert(can);
}


