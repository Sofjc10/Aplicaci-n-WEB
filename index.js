// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form Validation for Affiliation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nombre === '' || email === '') {
        alert('Por favor, completa todos los campos.');
    } else if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo válido.');
    } else {
        alert(`¡Gracias por registrarte, ${nombre}!`);
        form.reset(); // Clear the form after submission
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

