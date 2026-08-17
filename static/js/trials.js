const trialInfoContainer = document.querySelector(".trial-info-container");
const registrationCard = document.querySelector(".trial-registration-card");
const confirmButton = registrationCard.querySelector(".trial-confirm-button");
const registrationForm = registrationCard.querySelector(".trial-form");
const successState = registrationCard.querySelector(".trial-success");

fetch("http://127.0.0.1:5000/api/events")
    .then(response => response.json())
    .then(events => {
        const trials = events.filter(event => event.type === "Trial");
        displayTrialInfo(trials);
    })
    .catch(error => {
        console.error("Error fetching trials:", error);
    });


function displayTrialInfo(trials) {
    trialInfoContainer.innerHTML = "";

    if (trials.length === 0) {
        trialInfoContainer.innerHTML = `
            <div class="no-trials">
                No currently active trials
            </div>
        `;

        return;
    }

    trials.forEach(trial => {
        const trialCard = document.createElement("div");

        trialCard.className = "trial-card";

        trialCard.innerHTML = `
            <div class="trial-header">
                <div>
                    <h3 class="trial-title">${trial.title}</h3>
                    <span class="trial-type">Rowing Trial</span>
                </div>

                <span class="trial-status">Registration Open</span>
            </div>

            <div class="trial-meta">
                <div class="trial-meta-item">
                    <span class="trial-meta-label">Date</span>
                    <span class="trial-meta-value">${trial.date}</span>
                </div>

                <div class="trial-meta-item">
                    <span class="trial-meta-label">Time</span>
                    <span class="trial-meta-value">
                        ${trial.start_time} - ${trial.end_time}
                    </span>
                </div>

                <div class="trial-meta-item">
                    <span class="trial-meta-label">Location</span>
                    <span class="trial-meta-value">${trial.location}</span>
                </div>
            </div>
        `;

        trialInfoContainer.appendChild(trialCard);
    });
}

confirmButton.addEventListener("click", () => {
    registrationForm.style.display = "none";
    registrationCard.classList.add("registration-success");
});