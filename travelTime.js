const dialog = document.getElementById("dialog");
const overlay = document.getElementById("overlay");
const output = document.getElementById("output");
const form = document.getElementById("travelForm");
const heading = document.getElementById("dialog-heading");
const span = document.createElement("span");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;


    span.textContent = " " + date;
    heading.appendChild(span);

    // Validate input
    if (from && to && date) {
        // Populate dialog box with form data
        output.innerHTML = `
        <section id="table-container">
            <table class="ticket-prices">
            <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure time</th>
                    <th>Book</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${from}</td>
                    <td>${to}</td>
                    <td>2:00 PM</td>
                    <td><button onclick="displayBook()">Book</button></td>
                </tr>
                <tr class="alt">
                <td>${from}</td>
                <td>${to}</td>
                    <td>3:00 PM</td>
                    <td><button onclick="displayBook()">Book</button></td>
                </tr>
                <tr>
                <td>${from}</td>
                <td>${to}</td>
                    <td>4:00 PM</td>
                    <td><button onclick="displayBook()">Book</button></td>
                </tr>
                <tr class="alt">
                <td>${from}</td>
                <td>${to}</td>
                    <td>5:00 AM</td>
                    <td><button onclick="displayBook()">Book</button></td>
                </tr>
            </tbody>
        </table>
    </section>
        `;

        // Show dialog box
        dialog.style.display = "block";
        overlay.style.display = "block";
    }
});

function closeDialog() {
    dialog.style.display = "none";
    overlay.style.display = "none";
}

function displayBook(){
    alert("Successfully book your ticket. Thank you for booking from Romduol Transport")
}