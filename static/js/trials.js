
const registerButton = document.querySelector('.trial-register-button');
const trialCard = document.querySelector('.trial-card');
const confirmButton = document.querySelector('.trial-confirm-button');

registerButton.addEventListener('click', () => {
    trialCard.classList.toggle('registration-open');
});

confirmButton.addEventListener('click', () => {
    const registration = document.querySelector('.trial-registration');

    registration.classList.add('registration-success');
});