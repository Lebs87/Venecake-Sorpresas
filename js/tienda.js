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

// Clase constructora de producto
/* class Producto {
    constructor(id, nombre, medida, color, precio, precioFinal) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.color = color
        this.precio = "$ " + precio
        this.precioFinal = "$ " + precioFinal
    }
} */

//Base de Datos
/* const dataBase =()=> {
	Productos.push(new Producto(955875, "GLOBO NUMERICO", "5", "ROJO", 5000, 5500))
	Productos.push(new Producto(955876, "GLOBO DE AGUA", "4", "VERDE", 3000, 3630))
	Productos.push(new Producto(955877, "GLOBO PAYASO", "3", "AMARILLO", 3500, 4235))
    Productos.push(new Producto(955878, "GLOBO PAYASO", "3", "AZUL", 3500, 4235))
    Productos.push(new Producto(955879, "GLOBO PAYASO", "4", "AZUL", 4000, 4840))
    Productos.push(new Producto(955880, "GLOBO PAYASO", "4", "ROJO", 4000, 4840))
    Productos.push(new Producto(955880, "GLOBO FLOR", "4", "ROJO", 4000, 4840))
}
dataBase() */

const cargarProductos = (param1) => {
    let fila = ""
    param1.forEach(Producto => {
        fila = `<tr>
                        <td>${Producto.id}</td>
                        <td class="nombre">${Producto.nombre}</td>
                        <td>${Producto.medida}</td>
                        <td>${Producto.color}</td>
                        <td>${Producto.precio}</td>
                        <td>${Producto.precioFinal}</td>
                        <td><button id="btn${Producto.id}" class="btn btn-danger">Agregar<button></td>
                    </tr>`
        ListaDeProductos.innerHTML += fila
    })
}
cargarProductos(Productos)

// AGREGAR PRODUCTOS 
/* const agregarProducto =() =>{
    let id = NUEVOID()
    let nombre = prompt("Ingresa la descripción del producto:").toUpperCase()
    let medida = prompt("Ingresa la medida del producto:").toUpperCase()
    let color = prompt("Ingresa el color del producto:").toUpperCase()  
    let precio = prompt("Ingresa el precio del producto:")
    let precioFinal = Number((precio * IVA).toFixed(2))
    Productos.push(new Producto (id, nombre, medida, color, precio, precioFinal))
    ListaDeProductos.innerHTML=""
    cargarProductos(Productos)    
} */

//EVENTOS JAVASCRIPT////                        BUSCADOR
//////////////
/* const inputFiltrar = document.querySelector("#filtroProducto")

const filtrarproductos = ()=>{
    let inputf =inputFiltrar.value.toUpperCase()
    if (inputf !== ""){
                    const Resultado = Productos.filter ((Producto)=> Producto.nombre.includes(inputf))
                        Resultado.length === 0 ? ListaDeProductos.innerHTML="" : ListaDeProductos.innerHTML=""
                        cargarProductos (Resultado)
                    } else {
                        ListaDeProductos.innerHTML=""
                        cargarProductos (Productos)
                    }   
}
inputFiltrar.addEventListener("input", filtrarproductos) */

//LIBRERIA  sweetalert2
/* const Bienvenida = ()=> {
    Swal.fire({
        toast: true,
        title: 'Producto agregado al carrito',
        timer: 2500,
        position: 'start',
        timerProgressBar: true,
        showConfirmButton: false,
        background:  'green',
        color: 'white'
    })
} */

// EVENTO BOTON DE AGREGAR PRODUCTOS

/* const eventoBtnAgregar = () => {
    Productos.forEach(Prod => {
        const btn = document.querySelector(`#btn${Prod.id}`)
        btn.addEventListener("click", ()=> Bienvenida())
    })
}
eventoBtnAgregar() */

// BOTON DE AGREGAR PRODUCTOS
/* const agregarAlCarrito =(id)=> {
    const Producto = Productos.find(Prod => Prod.id == id)
          Carrito.push(Producto)
          localStorage.setItem("Carrito", JSON.stringify(Carrito))
} */

/* function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.nombre}</td>
                            <td>$ ${prod.importe}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
} */
/* recuperoCarrito() */

// ORDENAR PRODUCTOS

/* const ordenarAfabeticamente = () => {
    Productos.sort((a,b)=>{
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    console.table(Productos)
} */