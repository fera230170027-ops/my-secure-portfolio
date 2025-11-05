document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        alert('Form dikirim secara aman via HTTPS!');
    });
});