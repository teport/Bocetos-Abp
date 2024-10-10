
window.onload = function() {

    const modal = document.getElementById('modal');
    const closeSpan = document.querySelector('.close');

    const delay = 800;


    setTimeout(function() {
        modal.style.display = 'block';
    }, delay);


    closeSpan.onclick = function() {
        modal.style.display = 'none';
    };


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};
