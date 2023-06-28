let contador = localStorage.getItem('contador');
let contadorElement = document.getElementById('contador-cursos');
let botonesComprar = document.querySelectorAll('.enviar');

//Agrega productos al local storage - Carrito a través del botón comprar

window.onload = function() {

    if(contador == null){
        contador = 0;
    }

    contadorElement.textContent = contador;

    botonesComprar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            contador++;
            localStorage.setItem('contador', contador);
            contadorElement.textContent = contador;
        });
    });
}

//Carrousel Dinámico

$('.responsive').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    speed: 400,   
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

