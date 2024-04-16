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

    console.log("Posición X del div: " + Bx, Mx);
    console.log("Posición Y del div: " + By, My);
});