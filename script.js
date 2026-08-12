let menu = document.getElementById("menu");
let links = document.getElementById("links");
let theme = document.getElementById("theme");

menu.onclick = function() {
    links.classList.toggle("show");
};

theme.onclick = function() {
    document.body.classList.toggle("dark");
};

document.querySelectorAll("nav a").forEach(function(link) {
    link.onclick = function() {
        links.classList.remove("show");
    };
});

let sections = document.querySelectorAll("section");

window.onscroll = function() {
    sections.forEach(function(section) {
        let position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

document.getElementById("form").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let result = document.getElementById("result");

    if (name == "" || email == "" || message == "") {
        result.innerHTML = "Please fill all fields.";
        result.style.color = "red";
    } else {
        result.innerHTML = "Message sent successfully!";
        result.style.color = "green";
    }
};