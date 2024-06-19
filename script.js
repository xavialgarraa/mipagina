// script.js
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        registerParticipant();
    });
});

function showRegistrationForm() {
    document.getElementById("registration").style.display = "block";
    document.getElementById("statistics").style.display = "block";
}

function registerParticipant() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if (name && email && age) {
        var participantsList = document.getElementById("participants-list");
        var listItem = document.createElement("li");
        listItem.textContent = "Nombre: " + name + ", Correo: " + email + ", Edad: " + age;
        participantsList.appendChild(listItem);

        // Limpiar el formulario
        document.getElementById("registration-form").reset();
    }
}

function loadYouTubeVideo() {
    var link = document.getElementById("youtube-link").value;
    var iframe = document.getElementById("youtube-frame");
    var videoId = link.split("/live/")[1];
    if (videoId) {
        var queryStringPosition = videoId.indexOf("?");
        if (queryStringPosition !== -1) {
            videoId = videoId.substring(0, queryStringPosition);
        }
        iframe.src = "https://www.youtube.com/embed/" + videoId;
    }
}

// script.js

function showRegistrationForm() {
    document.getElementById('registration').style.display = 'block';
    window.location.hash = '#registration';
}


// Script para manejar el envío del formulario de inscripción
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor
});

// Menú desplegable lateral
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');

menuToggle.addEventListener('click', () => {
    sideNav.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('#checkbox');

    themeSwitch.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Verifica el tema guardado en localStorage al cargar la página
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = true;
    }
});

menuToggle.addEventListener('click', () => {
    sideNav.classList.toggle('show');
});

   
