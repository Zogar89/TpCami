let h2 = document.querySelector('#tarjeta h2');
let fondo = document.getElementsByName("color");
let tarjeta = document.getElementById('tarjeta');
let radiosFuente = document.querySelectorAll('input[name="tamaño"]');
let opcionFondo = document.getElementById('opcionFondo');
let texto = document.querySelector("#texto");
let btnNaranjaO = document.getElementById("radioColor1");
let btnGris = document.getElementById("radioColor2");
let btnNaranjaC = document.getElementById("radioColor3");
let btnRosa = document.getElementById("radioColor4");
let valor = document.querySelector("#valor");
let h3 = document.querySelector('#tarjeta h3');

//CAMBIA EL TEXTO DE LA TARJETA

texto.addEventListener("input", function () {
    h2.innerHTML = texto.value;
});

//CAMBIA EL COLOR DEL TEXTO EN LA TARJETA

const titulo = document.querySelector('h2');

btnNaranjaO.addEventListener("click", function (e) {
    e.preventDefault();
    titulo.classList.remove("color2", "color3", "color4");
    h3.classList.remove("color2", "color3", "color4");
    titulo.classList.add("color1");
    h3.classList.add("color1");
});

btnGris.addEventListener("click", function (e) {
    e.preventDefault();
    titulo.classList.remove("color1", "color3", "color4");
    h3.classList.remove("color1", "color3", "color4");
    titulo.classList.add("color2");
    h3.classList.add("color2");
});

btnNaranjaC.addEventListener("click", function (e) {
    e.preventDefault();
    titulo.classList.remove("color1", "color2", "color4");
    h3.classList.remove("color1", "color2", "color4");
    titulo.classList.add("color3");
    h3.classList.add("color3");
});

btnRosa.addEventListener("click", function (e) {
    e.preventDefault();
    titulo.classList.remove("color1", "color2", "color3");
    h3.classList.remove("color1", "color2", "color3");
    titulo.classList.add("color4");
    h3.classList.add("color4");
});

//CAMBIA LA IMAGEN DEL FONDO

opcionFondo.addEventListener('change', function () {

    let fondoElegido = opcionFondo.querySelector('input[name="fondo"]:checked').value;

    let rutaImagen = window.location.href + 'img/imagen-gift/' + fondoElegido;

    tarjeta.style.backgroundImage = 'url("../img/imagen-gift/' + fondoElegido + '")';
});

//CAMBIA EL TAMAÑO DE LA FUENTE

radiosFuente.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let tamañoElegido = this.value;

        switch (tamañoElegido) {
            case 'tamaño1':
                tarjeta.style.fontSize = "15px";
                break;
            case 'tamaño2':
                tarjeta.style.fontSize = "20px";
                break;
            case 'tamaño3':
                tarjeta.style.fontSize = "25px";
                break;
            case 'tamaño4':
                tarjeta.style.fontSize = "30px";
                break;
            default:
                tarjeta.style.fontSize = "5px";
        }
    });
});

//CAMBIA EL VALOR DE LA GIFTCARD

valor.addEventListener("input", function () {
  h3.innerHTML = valor.value;
});


//CAMBIA LA ALINEACIÓN DEL TEXTO 


