// Muestra la ventana emergente después de que la página se haya cargado
window.onload = function() {
    // Obtén el modal y el botón de cerrar
    const modal = document.getElementById('modal');
    const closeSpan = document.querySelector('.close');

    // Configura el retraso en milisegundos (5000 ms = 5 segundos)
    const delay = 800; // 5000 ms = 5 segundos

    // Muestra el modal después del retraso
    setTimeout(function() {
        modal.style.display = 'block';
    }, delay);

    // Cierra el modal cuando se hace clic en el botón de cerrar
    closeSpan.onclick = function() {
        modal.style.display = 'none';
    };

    // Cierra el modal si el usuario hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};
