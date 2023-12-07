document.addEventListener('DOMContentLoaded', function () {
    const adoptionForm = document.getElementById('adoption-form');

    // Función para validar el formulario de adopción
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const animalType = document.getElementById('animal-type').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !animalType || !message) {
            alert('Por favor, complete todos los campos del formulario.');
            return false;
        }

        // Puedes agregar aquí lógica adicional de validación si es necesario

        return true;
    }

    // Evento para manejar el envío del formulario de adopción
    adoptionForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Validar el formulario antes de enviarlo
        if (validateForm()) {
            // Puedes agregar aquí la lógica para enviar los datos del formulario a un servidor o mostrar un mensaje de confirmación.
            alert('¡Formulario de adopción enviado con éxito!');
        }
    });
});
