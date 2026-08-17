
let events = [];
async function loadEvents() {
    const response = await fetch("/api/events");
    events = await response.json();
}

function getEventsForDate(date) {
    return events.filter(event => event.date === date);
}

function createEventElement(event) {
    const eventElement = document.createElement("div");
    eventElement.classList.add("calendar-event");

    const eventName = document.createElement("span");
    eventName.classList.add("calendar-event-name");
    eventName.textContent = event.title;

    const eventTime = document.createElement("span");
    eventTime.classList.add("calendar-event-time");
    eventTime.textContent = `${event.start_time} - ${event.end_time}`;

    const eventLocation = document.createElement("span");
    eventLocation.classList.add("calendar-event-location");
    eventLocation.textContent = event.location;

    eventElement.appendChild(eventName);
    eventElement.appendChild(eventTime);
    eventElement.appendChild(eventLocation);

    return eventElement;
}