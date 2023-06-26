document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Photoshop e Illustrator',
                start: '2023-06-28',
            },
            {
                title: 'After Effects',
                start: '2023-07-15',
            },
            {
                title: 'Fundamentos del Diseño Gráfico',
                start: '2023-07-25',
            },
            {
                title: 'Motion Graphics',
                start: '2023-10-10',
            },
            {
                title: 'Diseño 3D (Blender)',
                start: '2023-09-02',
            },
            {
                title: 'Ilustración Digital',
                start: '2023-08-10',
            }
        ]
    }); 

    calendar.render();
  });

  /*.libreria({
    opcion:valor,
    opcion2:valor,
    opcionConOpciones:[
        {
            opcionInterna:valor,
            opcionInternaUltima:valor
        },
        {
            opcionInterna:valor
        }
    ],
    opcionUltima:valor
  })*/