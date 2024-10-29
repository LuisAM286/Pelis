function toggleInfo(button){
    const sinopsis = button.nextElementSibling;
    sinopsis.classList.toggle('visible');
    button.textContent = sinopsis.classList.contains('visible') ? "Ver menos" : "Ver más";
}