// Seleccionamos todas las imágenes dentro de los marcos de fotos
const images = document.querySelectorAll('.photo-frame img');

// Efecto de movimiento suave al pasar el mouse
images.forEach((img) => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) - 0.5;
        const y = ((e.clientY - rect.top) / rect.height) - 0.5;

        img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Efecto de rebote suave al hacer clic
images.forEach((img) => {
    img.addEventListener('click', () => {
        img.style.animation = 'bounce 0.5s';
        setTimeout(() => {
            img.style.animation = '';
        }, 500);
    });
});
