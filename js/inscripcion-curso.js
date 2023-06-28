//Agrega productos al local storage - Carrito a través del botón inscribirse.

let contador = localStorage.getItem('contador');
let contadorElement = document.getElementById('contador-cursos');

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

// Variables globales
var personas = 0; // Contador de personas
var precio = 7800; // Precio por persona
var total = precio; // Total a pagar inicial (1 persona)

// Obtén elementos del DOM
var agregarPersona = document.getElementById("agregarPersona");
var botonInscribirse = document.querySelector(".enviar");
var modal = document.getElementById("modal");
var closeButton = document.getElementsByClassName("close")[0];

// Agrega un manejador de eventos al botón "Agregar persona"
agregarPersona.addEventListener("click", function() {
  // Incrementa el contador de personas
  personas+1;

  // Crea los elementos para una nueva persona
  var form = document.createElement("form");
  var nombreInput = document.createElement("input");
  var apellidoInput = document.createElement("input");
  var dniInput = document.createElement("input");
  var imagenBorrar = document.createElement("img");

  // Configura los atributos de los elementos creados
  form.action = "#";
  nombreInput.type = "text";
  nombreInput.placeholder = "Ingresar nombre";
  apellidoInput.type = "text";
  apellidoInput.placeholder = "Ingresar apellido";
  dniInput.type = "text";
  dniInput.placeholder = "Ingresar DNI";
  imagenBorrar.src = "../img/borrar.png";
  imagenBorrar.alt = "borrar";
  imagenBorrar.className = "borrar";

  // Agrega los elementos al formulario
  form.appendChild(nombreInput);
  form.appendChild(apellidoInput);
  form.appendChild(dniInput);
  form.appendChild(imagenBorrar);

  // Agrega el formulario a la sección de inscripción
  var formInsc = document.getElementById("formInsc");
  formInsc.appendChild(form);

  // Actualiza el total a pagar
  total += precio;
  actualizarTotal();
});

// Agrega un manejador de eventos a los botones de "Borrar"
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("borrar")) {
    // Verifica que no sea el primer campo
    if (personas > 1) {
      // Elimina el formulario de la persona
      var form = event.target.parentNode;
      form.parentNode.removeChild(form);

      // Decrementa el contador de personas
      personas--;

      // Actualiza el total a pagar
      total -= precio;
      actualizarTotal();
    } else {
      // Limpia los valores de los campos del primer formulario
      var inputs = event.target.parentNode.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
    }
  }
});

// Agrega un manejador de eventos al botón "Inscribirse"
botonInscribirse.addEventListener("click", function() {
  // Muestra el modal con el resumen de personas inscritas
  var resumen = "Cantidad de personas inscritas: " + personas + "\n";
  resumen += "Total a pagar: $" + total;
  mostrarModal(resumen);
});

// Agrega un manejador de eventos al botón de cierre del modal
closeButton.addEventListener("click", function() {
  // Oculta el modal al hacer clic en el botón de cierre
  modal.style.display = "none";
});

// Función para actualizar el total a pagar en la pantalla
function actualizarTotal() {
  var precioPagar = document.querySelector(".boton-enviar p");
  precioPagar.innerHTML = "<strong> Precio a pagar: </strong> $" + total;
}

