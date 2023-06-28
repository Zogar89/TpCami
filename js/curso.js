const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const content = this.nextElementSibling;

    // Alternar la clase 'open' para mostrar u ocultar el contenido
    content.classList.toggle('open');
  });
});

// Define un array con los nombres de las IDs de los botones "Inscribirse"
var botonesIds = ["comprar6", "comprar7", "comprar8", "comprar9"];

// Obtén el modal y el botón de cierre
var modal = document.getElementById("modal");
var closeButton = document.getElementsByClassName("close")[0];

// Recorre los nombres de las IDs de los botones
botonesIds.forEach(function(id) {
  // Obtén el botón de inscripción por su ID
  var botonInscribirse = document.getElementById(id);
  
  // Agrega un manejador de eventos a cada botón de inscripción
  botonInscribirse.addEventListener("click", function() {
    // Muestra el modal
    modal.style.display = "block";
  });
});

// Agrega un manejador de eventos al botón de cierre
closeButton.addEventListener("click", function() {
  // Oculta el modal al hacer clic en el botón de cierre
  modal.style.display = "none";
});

// Obtén todos los elementos del acordeón
var dropdowns = document.getElementsByClassName("dropdown");

// Recorre cada elemento del acordeón
for (var i = 0; i < dropdowns.length; i++) {
  // Agrega un manejador de eventos al botón del acordeón
  dropdowns[i].addEventListener("click", function() {
    // Cambia la clase activa del botón del acordeón
    this.classList.toggle("active");
    
    // Obtén el contenido del acordeón asociado al botón
    var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
    
    // Verifica si el contenido del acordeón está visible o oculto
    if (dropdownContent.style.display === "block") {
      // Oculta el contenido del acordeón
      dropdownContent.style.display = "none";
    } else {
      // Muestra el contenido del acordeón
      dropdownContent.style.display = "block";
    }
  });
  
  // Obtén los elementos de input radio dentro de cada acordeón
  var radioInputs = dropdowns[i].getElementsByTagName("input");
  
  // Agrega un manejador de eventos a los elementos de input radio
  for (var j = 0; j < radioInputs.length; j++) {
    radioInputs[j].addEventListener("click", function(event) {
      // Evita que el evento se propague al contenedor del acordeón
      event.stopPropagation();
    });
  }
}