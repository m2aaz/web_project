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

        if (viewID == 'teams') {
            loadMembers()
        }
    });
});


async function loadMembers() {

    const response = await fetch("/api/members");
    const data = await response.json();
    const tbody = document.getElementById("team-members-body");

    data.forEach(member => {
        const row = document.createElement("tr");

        const erpId = document.createElement("td");
        erpId.textContent = member.erp_id;

        const firstName = document.createElement("td");
        firstName.textContent = member.first_name;

        const lastName = document.createElement("td");
        lastName.textContent = member.last_name;

        const status = document.createElement("td");
        status.textContent = member.status;

        row.appendChild(erpId);
        row.appendChild(firstName);
        row.appendChild(lastName);
        row.appendChild(status);

        tbody.appendChild(row);
    });

    console.log("Table populated");
}

loadMembers();
