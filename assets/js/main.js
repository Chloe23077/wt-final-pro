document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("First_name").value;
        const lastName = document.getElementById("Last_name").value;
        const email = document.getElementById("Email").value;

        if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        form.reset();
    });
});
