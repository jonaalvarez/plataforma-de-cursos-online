document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso de React Intermedio',
                start: '2021-07-07',
                end:'2021-07-20'
            },
            {
                title: 'Curso de Node',
                start: '2021-07-23',
                end: '2021-07-30'
            }
        ]
    }); 

    calendar.render();
  });
