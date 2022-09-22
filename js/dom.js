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
                    </tr>`
        ListaDeProductos.innerHTML += fila
    })
}
cargarProductos(Productos)

const agregarProducto =() =>{
    let id = NUEVOID()
    let nombre = prompt("Ingresa la descripción del producto:")
    let medida = prompt("Ingresa la medida del producto:")
    let color = prompt("Ingresa el color del producto:")    
    let precio = prompt("Ingresa el precio del producto:")
    let precioFinal = Number((precio * IVA).toFixed(2))
    Productos.push(new Producto (id, nombre, medida, color, precio, precioFinal))
    cargarProductos()    
}

//EVENTOS JAVASCRIPT////                        BUSCADOR

const inputFiltrar = document.querySelector("#filtroProducto")

const filtrarproductos = ()=>{
    let inputf =inputFiltrar.value.toUpperCase()
    if (inputf !== ""){
                    const Resultado = Productos.filter ((Producto)=> Producto.nombre.includes(inputf))
                        if (Resultado.length === 0) {
                        ListaDeProductos.innerHTML=""
                        }else{
                            ListaDeProductos.innerHTML=""
                            cargarProductos (Resultado)
                        }
                    } else {
                        ListaDeProductos.innerHTML=""
                        cargarProductos (Productos)
                    }   
}
inputFiltrar.addEventListener("keyup", filtrarproductos)