function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all fields.";
        return;
    }

    result.textContent = "Message submitted successfully!";
    this.reset();
});