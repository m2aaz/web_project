
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

loadMembers()