////////////////////             DOM                ////////////////////////////

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

const inputFiltrar = document.querySelector("#filtroProducto")

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
inputFiltrar.addEventListener("input", filtrarproductos)

//LIBRERIA  sweetalert2
const Bienvenida = ()=> {
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
}

// EVENTO BOTON DE AGREGAR PRODUCTOS

const eventoBtnAgregar = () => {
    Productos.forEach(Prod => {
        const btn = document.querySelector(`#btn${Prod.id}`)
        btn.addEventListener("click", ()=> Bienvenida())
    })
}
eventoBtnAgregar()

// BOTON DE AGREGAR PRODUCTOS
const agregarAlCarrito =(id)=> {
    const Producto = Productos.find(Prod => Prod.id == id)
          Carrito.push(Producto)
          localStorage.setItem("Carrito", JSON.stringify(Carrito))
}

function recuperoCarrito() {
    //debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.nombre}</td>
                            <td>$ ${prod.importe}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()

// ORDENAR PRODUCTOS

const ordenarAfabeticamente = () => {
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
}