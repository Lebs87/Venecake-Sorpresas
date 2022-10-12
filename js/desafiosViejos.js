//////////////////// FUNCTIONS EMPLEADAS EN DESAFÍOS ANTERIORES

//Filtrado de los elementos de la dataBase
/* function filtrarPorNombre() {
    let parametro = prompt("Ingresa el nombre a filtrar:")
    let resultado = Productos.filter((Producto)=> Producto.nombre.includes(parametro))
        console.table(resultado)
        return resultado     
}
function filtrarPorColor() {
    let parametro = prompt("Ingresa el color a filtrar:")
    let resultado = Productos.filter((Producto)=> Producto.color.includes(parametro))
        console.table(resultado)
        return resultado
}
//Busqueda de ID
function buscarId() {
    let numId = prompt("Ingresa el ID a buscar:")
    let resultado = Productos.find((Producto)=> Producto.id == (numId))
        if (resultado !== undefined) {
            return resultado
        } else {
            console.warn("No se encontró el ID.")
            return "No se encontró el ID."
        }
} */


//Método Map() = mapea una estructura nueva
/* function proyectarIncremento() {
    let proyeccion = productos.map((producto) => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: parseFloat((producto.importe * 1.15).toFixed(2))
        }
    })
    console.table(proyeccion)
}
let DESC = -35000 || 0 */
//Reduce a un único resultado valores de un array
/* function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, DESC)
    console.log("Total del carrito:", total)
} */

//Ordena los productos por la propiedad indicada
/* function ordenarProductos() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(productos)
} */


///////////////////////          BORRAR EL CARRITO
/* localStorage.setItem("products", []) o localStorage.removeItem("products") y tamo chelo */








//////////////////PARA EL FORMULARIO DE CONTACTO


/* const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputComentarios = document.querySelector("#inputComentarios")
const btnEnviar = document.querySelector("#btnEnviar")

function guardarDatos() {
    localStorage.setItem("nombre",inputNombre.value) crear una clave y almacenar un valor
    localStorage.setItem("email",inputEmail.value)
    localStorage.setItem("comentarios",inputComentarios.value)
}

btnEnviar.addEventListener("click",guardarDatos)

function recuperarDatos() {
    inputNombre.value = localStorage.getItem("nombre") 
    inputEmail.value = localStorage.getItem("email")
    inputComentarios.value = localStorage.getItem("comentarios")
}

document.addEventListener("DOMContentLoaded", recuperarDatos) */








/////// PARA EL CARRITO

/* function eventoEnBotones() {
    productos.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.id}`)
              btn.addEventListener("click", ()=> agregarAlCarrito(`${prod.id}`))
    })
}
eventoEnBotones()

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id == id)
          carrito.push(producto)
          //console.table(carrito)
          localStorage.setItem("carrito", JSON.stringify(carrito))
}

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito() */





///CHEQUEAR DATOS DEL LOS INPUTS

/* const datosCompletos = ()=> {
    if (propiedad.value !== "..." && ubicacion.value !== "..." && parseInt(metros2.value) && metros2.value >= 20 && metros2.value <= 500) {
        return true
    } else {
        return false
    }
} */


//////////////////TEMPORIZADOR/////////////////////////////////////////////////
/* const token = document.querySelector("h2")
const progress = document.querySelector("progress")
  let intervalo = 0
      progress.value = 0

token.textContent = parseInt(Math.random() * 1_000_000)

const intervaloToken = setInterval(() => {
                          intervalo > 30 && tokenReset()
                          progress.value = intervalo
                          intervalo++
                        }, 1000); //mil milisegundos = 1 segundo

const tokenReset = ()=> {
  clearInterval(intervaloToken)
  intervalo = 0
  location.reload()
} */