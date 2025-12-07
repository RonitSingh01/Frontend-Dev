// Q5: Movie Ticket Booking (Objects + RegExp) 

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const seatsInput = document.getElementById("seats");
    const ticketDetailsDiv = document.getElementById("ticket-details");

    // Regular expressions
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        ticketDetailsDiv.style.display = "none"; // Hide old ticket
        ticketDetailsDiv.innerHTML = "";

        // Get values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const seats = parseInt(seatsInput.value, 10);

        let isValid = true;

        // Validate Name [cite: 34]
        if (!nameRegex.test(name)) {
            nameInput.classList.add("invalid");
            isValid = false;
        } else {
            nameInput.classList.remove("invalid");
        }

        // Validate Email [cite: 35]
        if (!emailRegex.test(email)) {
            emailInput.classList.add("invalid");
            isValid = false;
        } else {
            emailInput.classList.remove("invalid");
        }

        // Validate Seats (1 to 10) [cite: 36]
        if (isNaN(seats) || seats < 1 || seats > 10) {
            seatsInput.classList.add("invalid");
            isValid = false;
        } else {
            seatsInput.classList.remove("invalid");
        }

        // If all validations pass [cite: 37]
        if (isValid) {
            // Store booking info in an object [cite: 37]
            const bookingInfo = {
                name: name,
                email: email,
                seats: seats
            };

            console.log("Booking Successful:", bookingInfo);

            // Display the ticket details [cite: 37]
            ticketDetailsDiv.style.display = "block";
            ticketDetailsDiv.innerHTML = `
                <h2>Booking Confirmed!</h2>
                <p><strong>Name:</strong> ${bookingInfo.name}</p>
                <p><strong>Email:</strong> ${bookingInfo.email}</p>
                <p><strong>Seats:</strong> ${bookingInfo.seats}</p>
            `;

            form.reset();
        } else {
            console.log("Validation failed.");
        }
    });
});