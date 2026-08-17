const previousMonth = document.getElementById("previous-month");
const nextMonth = document.getElementById("next-month");

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

previousMonth.addEventListener("click", () => changeMonth(-1));
nextMonth.addEventListener("click", () => changeMonth(1));