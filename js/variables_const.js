// ARRAYS DEL PROYECTO
const Productos = [] //ELIMINAR
const Carrito = []
let globos = []

//VARIABLES 
let documentoModelos = ""

//CONSTANTES DE LOS PRODUCTOS PUBLICADOS
const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const IVA = 1.21
const URL = "../dataBase/globos.json"

// CONSTANTES QUE TRABAJAN CON EL DOM
    //DOCUMENTO HTML TIENDA
const ListaDeProductos = document.querySelector("#listaDeProductos")

    //DOCUMENTO HTML AGREGARPROD
const inputNombreProd = document.querySelector("#inputNombreProd")
const inputMedida = document.querySelector("#inputMedida")
const inputColor = document.querySelector("#inputColor")
const inputPrecio = document.querySelector("#inputPrecio")
const inputImagen = document.querySelector("#inputImagen")

// funciones
const mostrarError = ()=> {
    return `<div class="card d-flex align-items-center">
                <h2>¡Ups... lo sentimos!</h2>
                <img class="errorDeCarga" src="../assets/images/errorCargaData.png">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const mostrarCard = (contenido)=> {
    const {id, nombre, precio, precioFinal, imagen, descripcion, medida} = contenido
    return `<div class="card">
                <img id="${id}" class="errorDeCarga" src="../assets/images/${imagen}" title="${nombre}" alt="${descripcion}">
                <div>
                <p title="${nombre}">${nombre} - ${medida}</p>
                <p >${precio}</p>
                <p >${precioFinal}</p>
                </div>
                <div class="align-btn">
                    <button class="btn btn-danger m-1" id="${id}">AGREGAR</button>
                </div>
            </div>`
}

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        globos = data
        globos.forEach(param => documentoModelos += mostrarCard(param))
    }
    catch (error) {
        documentoModelos += mostrarError()
    }
    finally {
        ListaDeProductos.innerHTML = documentoModelos
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
          //activarClicks()
          console.log("Hola Hola Perinola")
})

