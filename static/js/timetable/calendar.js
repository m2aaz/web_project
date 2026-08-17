
let currentDate = new Date();
const calendarGrid = document.getElementById("calendar-grid");
const calendarMonth = document.getElementById("calendar-month");

async function initializeCalendar() {
    await loadEvents();
    renderCalendar();
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startingDay = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthName = currentDate.toLocaleString("default", {
        month: "long"
    });

    calendarMonth.textContent = `${monthName} ${year}`;
    calendarGrid.innerHTML = "";

    for (let i=0; i<startingDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar-day", "empty");
        calendarGrid.appendChild(emptyDay);
    }

    for (let dayNumber=1; dayNumber<=daysInMonth; dayNumber++) {
        const day = document.createElement("div");
        day.classList.add("calendar-day");

        const dayNumberElement = document.createElement("div");
        dayNumberElement.classList.add("calendar-day-number");
        dayNumberElement.textContent = dayNumber;

        day.appendChild(dayNumberElement);

        const date = `${dayNumber}/${month + 1}/${year}`;
        const dayEvents = getEventsForDate(date);

        dayEvents.forEach(event => {
            day.appendChild(createEventElement(event));
        });

        calendarGrid.appendChild(day);
    }
}