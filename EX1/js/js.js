
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón 'Escribe una reseña'. 
   on click!
   (5 puntos)
*/
let btnWrite = document.getElementById('escribe_reseña');

btnWrite.addEventListener('click', function() {
  let seccion = document.getElementById('seccion_comentario')
  seccion.style.visibility = 'visible'
  this.style.visibility = 'hidden'
})



/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml 
  (función ajax, 25 puntos)
*/
$.ajax({
  url : 'https://erickmedinafleming.github.io/examenParcial/EX1/data/comentarios.xml',
  type : 'GET',
  dataType : 'xml',
  success : function(data){

    let newHtml = ''
    $(data).find('comment').each(function(){
      newHtml+=`
      <div><label class='nombre'>${$(this).find('name').text()}</label>`+ getStarsSpans($(this).find('stars').text()) +` <label class="review">${$(this).find('text').text()}</label></div>`
    })
    $('#seccion_reviews').append(newHtml)
  },
  error: function(errorMsg){
    console.log(errorMsg)
  }
})

/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/
/*
let btnComment = document.getElementById('btn-publicar');

btnWrite.addEventListener('click', function() {
  let seccion = document.getElementById('seccion_comentario')
  seccion.style.visibility = 'visible'
  this.style.visibility = 'hidden'
})*/

/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/
/*
let btnWrite = document.getElementById('escribe_reseña');

btnWrite.addEventListener('click', function() {
  let seccion = document.getElementById('seccion_comentario')
  seccion.style.visibility = 'visible'
  this.style.visibility = 'hidden'
})*/
/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
