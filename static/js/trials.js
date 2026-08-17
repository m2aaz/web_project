fetch("http://127.0.0.1:5000/api/events")
    .then(response => response.json())
    .then(events => {
        const trials = events.filter(event => event.type === "Trial");
        displayTrials(trials);
    })
    .catch(error => {
        console.error("Error fetching trials:", error);
    });

function displayTrials(trials) {
    const trialsList = document.querySelector(".trials-list");

    trialsList.innerHTML = "";

    if (trials.length === 0) {
        trialsList.innerHTML = `
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

            <div class="trial-actions">
                <button class="trial-register-button" type="button">
                    Register
                </button>
            </div>

            <div class="trial-registration">
                <div class="trial-registration-title">
                    Trial Registration
                </div>
            
                <div class="trial-form">
                    <div class="trial-input-box">
                        <label>ERP ID</label>
                        <input type="text" placeholder="Enter your ERP ID">
                    </div>
            
                    <div class="trial-form-row">
                        <div class="trial-input-box">
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your first name">
                        </div>
            
                        <div class="trial-input-box">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your last name">
                        </div>
                    </div>
            
                    <div class="trial-input-box">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number">
                    </div>
            
                    <button class="trial-confirm-button" type="button">
                        Confirm Registration
                    </button>
                </div>
            
                <div class="trial-success">
                    <div class="trial-success-icon">
                        <svg viewBox="0 0 52 52">
                            <circle
                                class="trial-success-circle"
                                cx="26"
                                cy="26"
                                r="24">
                            </circle>
            
                            <path
                                class="trial-success-check"
                                d="M15 27 L22 34 L37 18">
                            </path>
                        </svg>
                    </div>
            
                    <div class="trial-success-title">
                        Registration Successful
                </div>
        
                <div class="trial-success-message">
                    You have been registered for the ${trial.title}.
                </div>
            </div>
        </div>
            </div>
        `;

        trialsList.appendChild(trialCard);

        const registerButton = trialCard.querySelector(".trial-register-button");
        const confirmButton = trialCard.querySelector(".trial-confirm-button");
        const registration = trialCard.querySelector(".trial-registration");

        registerButton.addEventListener("click", () => {
            trialCard.classList.toggle("registration-open");
        });

        confirmButton.addEventListener("click", () => {
            registration.classList.add("registration-success");
        });
    });
}