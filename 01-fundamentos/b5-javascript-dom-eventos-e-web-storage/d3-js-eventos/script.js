function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //Q01
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
      let listDays = document.querySelector('#days');

      for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = dezDaysList[i];
        let dayTag = document.createElement('li');

        if(day === 24 || day ===31) {
            dayTag.className = 'day holiday';
            dayTag.innerHTML = day;
            listDays.appendChild(dayTag);
        } else if (day === 4 || day === 11 || day === 18) {
            dayTag.className = 'day friday';
            dayTag.innerHTML = day;
            listDays.appendChild(dayTag);
        } else if (day === 25) {
            dayTag.className = 'day holiday friday';
            dayTag.innerHTML = day;
            listDays.appendChild(dayTag);
        } else {
            dayTag.className = 'day';
            dayTag.innerHTML = day;
            listDays.appendChild(dayTag);
        }
    }
  }
  createDaysOfTheMonth();

  //Q02

  function createHolidayButton (buttonName) {
      let buttonContainer = document.querySelector('.buttons-container');
      let newButton= document.createElement('button');
      let newButtonID = 'btn-holiday';

        newButton.innerHTML = buttonName;
        newButton.id = newButtonID;
        buttonContainer.appendChild(newButton);
  }
  createHolidayButton('Feriados');

  //Q03

  function displayHolidays() {
      let holidayButton = document.querySelector('#btn-holiday');
      let holidays = document.querySelectorAll('.holiday')
      let backgroundColor = 'rgb(238,238,238)';
      let newColor = 'white';

      holidayButton.addEventListener('click', function() {
          for (let i = 0; i < holidays.length; i += 1) {
              if (holidays[i].style.backgroundColor === newColor) {
                  holidays[i].style.backgroundColor = backgroundColor;
              } else {
                  holidays[i].style.backgroundColor = newColor;
              }
          }
      })
    }
    displayHolidays();