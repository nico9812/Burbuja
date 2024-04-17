document.addEventListener('mousemove', function(event) {
    var burbuja = document.getElementById('burbuja');
    var Mx = event.clientX;
    var My = event.clientY;

    var posicion = burbuja.getBoundingClientRect();

    var ventanaX = window.pageXOffset || document.documentElement.scrollLeft;
    var ventanaY = window.pageYOffset || document.documentElement.scrollTop;

    var Bx = posicion.left + ventanaX + posicion.width/2;
    var By = posicion.top + ventanaY + posicion.height/2;

    var deltaX = Mx - Bx;
    var deltaY = My - By;

    var anguloRadianes = Math.atan2(deltaY, deltaX);
    var anguloGrados = anguloRadianes * (180 / Math.PI) + 90;

    burbuja.style.transform = 'rotateZ(' + anguloGrados + 'deg)';
});

// let isTracking = false;

// function startTracking() {
//   isTracking = true;
//   document.addEventListener('mousemove', moverburbuja);
// }

// function stopTracking() {
//   isTracking = false;
//   document.removeEventListener('mousemove', moverburbuja);
// }


// function moverburbuja(event) {
//     if(isTracking){

//         var burbuja = document.getElementById('burbuja');
//         var mouseX = event.clientX;
//         var mouseY = event.clientY;

//         // Obtiene el offset de la burbuja en relación con la ventana del navegador
//         var rect = burbuja.getBoundingClientRect();
//         var offsetX = mouseX - rect.width/2 - rect.left;
//         var offsetY = mouseY - rect.height/2 - rect.top;

//         // Establece la posición de la burbuja
//         burbuja.style.left = offsetX + 'px';
//         burbuja.style.top = offsetY + 'px';

//     }
// };

// document.addEventListener("DOMContentLoaded", function() {
//     var movableDiv = document.getElementById("burbuja");
//     var isMouseDown = false;
    
//     movableDiv.addEventListener("mousedown", function(event) {
//         isMouseDown = true;
//         var offsetX = event.clientX;
//         var offsetY = event.clientY;

//         document.addEventListener("mousemove", moveDiv);

//         function moveDiv(event) {
//             if (isMouseDown) {
//                 movableDiv.style.left = movableDiv.getBoundingClientRect().left - (event.clientX - offsetX) + "px";
//                 movableDiv.style.top = movableDiv.getBoundingClientRect().top - (event.clientY - offsetY) + "px";
//             }
//         }

//         movableDiv.addEventListener("mouseup", function() {
//             isMouseDown = false;
//             document.removeEventListener("mousemove", moveDiv);
//         });
//     });

// });

// Obtener el elemento draggable
var draggableElement = document.getElementById('burbuja');

// Variables para almacenar la posición inicial del mouse y del div
var startX, startY, offsetX, offsetY;

// Función que se activa cuando se empieza a arrastrar el div
function startDrag(e) {
  startX = e.clientX;
  startY = e.clientY;
  offsetX = (startX - draggableElement.offsetLeft)/4;
  offsetY = (startY - draggableElement.offsetTop)/4;
  console.log(offsetX,offsetY, startX,startY)
  draggableElement.style.left = offsetX + 'px';
  draggableElement.style.top = offsetY + 'px';
  
  // Agregar listeners para el movimiento del mouse
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);
}

// Función para arrastrar el div
function drag(e) {
  var newX = offsetX + e.clientX - startX;
  var newY = offsetY + e.clientY - startY;
  startX = e.clientX;
  startY = e.clientY;
  offsetX = newX;
  offsetY = newY;
  
  // Establecer la nueva posición del div
  draggableElement.style.left = newX + 'px';
  draggableElement.style.top = newY + 'px';
}

// Función que se activa cuando se termina de arrastrar el div
function endDrag() {
  // Remover los listeners del movimiento del mouse
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', endDrag);
}

// Agregar listener para el evento mousedown en el div
draggableElement.addEventListener('mousedown', startDrag);

