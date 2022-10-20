// ERROR AL CARGAR LAS IMAGENES
const mostrarError = ()=> {
    return `<div class="card d-flex align-items-center">
                <h2>¡Ups... lo sentimos!</h2>
                <img class="errorDeCarga" src="../assets/images/errorCargaData.png">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}
//CONSTRUCION DE LAS TARJETAS DE IMAGENES
const mostrarCard = (contenido)=> {
    const {id,nombre, ruta, imagen, descripcion,} = contenido
    return `<article id="${id}" class="ubicacion_galeria">
                <a class="ubicacion_titulos" href="${ruta}">
                "${nombre}"</a>
                <div class="ubicacion_img">
                    <a href="${ruta}">
                        <img class="imgGaleria" src="../assets/images/${imagen}" title="${nombre}" alt="${descripcion}"
                    </a>
                </div>
            </article>`
}
//CARGA DE CONTENIDO DEL JSON
const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        galeria = data
        const arrayGuirnaldas = galeria.filter(e => e.categoria == "Guirnaldas")
        const arrayBouquets = galeria.filter(e => e.categoria == "Bouquets")
        const arrayPared = galeria.filter(e => e.categoria == "Pared")
        arrayBouquets.forEach(param => documentoBouquets += mostrarCard(param))
        arrayGuirnaldas.forEach(param => documentoGuirnaldas += mostrarCard(param))
        arrayPared.forEach(param => documentoParedes += mostrarCard(param))
    }
    catch (error) {
        documentoModelos += mostrarError()
    }
    finally {
        galeriaBouquets.innerHTML = documentoBouquets
        galeriaParedes.innerHTML = documentoGuirnaldas
        galeriaGuirnaldas.innerHTML = documentoParedes
    }
}
document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
})