
let currentDate = new Date();
const calendarGrid = document.getElementById("calendar-grid");
const calendarMonth = document.getElementById("calendar-month");
const previousMonth = document.getElementById("previous-month");
const nextMonth = document.getElementById("next-month");

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

    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar-day", "empty");

        calendarGrid.appendChild(emptyDay);
    }

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
        const day = document.createElement("div");
        day.classList.add("calendar-day");

        const dayNumberElement = document.createElement("div");
        dayNumberElement.classList.add("calendar-day-number");
        dayNumberElement.textContent = dayNumber;

        day.appendChild(dayNumberElement);

        calendarGrid.appendChild(day);
    }
}

function changeMonth(direction) {
    const exitClass = direction === 1
        ? "calendar-exit-left"
        : "calendar-exit-right";

    const enterClass = direction === 1
        ? "calendar-enter"
        : "calendar-enter-left";

    calendarGrid.classList.add(exitClass);

    setTimeout(() => {
        currentDate.setMonth(currentDate.getMonth() + direction);

        renderCalendar();

        calendarGrid.classList.remove(exitClass);
        calendarGrid.classList.add(enterClass);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                calendarGrid.classList.remove(enterClass);
            });
        });
    }, 180);
}

previousMonth.addEventListener("click", function () {
    changeMonth(-1);
});

nextMonth.addEventListener("click", function () {
    changeMonth(1);
});
renderCalendar();