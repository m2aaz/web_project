const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const normalBoat = document.querySelector('.boat-normal');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const viewId = button.getAttribute('data-view');

        views.forEach(view => {
            view.classList.remove('active');
        });

        const selectedView = document.querySelector(`.${viewId}-view`);

        if (selectedView) {
            selectedView.classList.add('active');
        }

        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        if (viewId === 'home') {
            normalBoat.style.display = 'block';
        } else {
            normalBoat.style.display = 'none';
        }
    });
});