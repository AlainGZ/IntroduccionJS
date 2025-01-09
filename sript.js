function validateForm() {
    // Obtener los elementos
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');

    // Reiniciar mensajes de error
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    addressError.textContent = '';

    let isValid = true;

    // Validar nombre
    if (name.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        isValid = false;
    }

    // Validar correo
    if (email.value.trim() === '') {
        emailError.textContent = 'El correo es obligatorio.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = 'Ingresa un correo válido.';
        isValid = false;
    }

    // Validar teléfono
    if (phone.value.trim() === '') {
        phoneError.textContent = 'El teléfono es obligatorio.';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = 'Ingresa un número de teléfono válido (10 dígitos).';
        isValid = false;
    }

    // Validar dirección
    if (address.value.trim() === '') {
        addressError.textContent = 'La dirección es obligatoria.';
        isValid = false;
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
        alert('Registro completado correctamente.');
        document.getElementById('registerForm').reset();
    }
}