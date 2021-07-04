document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Vacuna 1',
                start: '2020-06-17',
                end:'2020-06-20'
            },
            {
                title: 'Vacuna 2',
                start: '2020-07-01'
            }
        ]
    }); 

    calendar.render();
  });