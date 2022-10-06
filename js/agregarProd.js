/* const inputs = document.querySelectorAll(".agregarProd_input")
inputs.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "foco-en-input")
    input.addEventListener("blur", ()=> input.className = "")
    input.addEventListener("keypress", (e)=> {
        if (e.key === "Enter") {
            let index = e.target.tabIndex
            if (input.tabIndex === (inputs.length - 1)) {
                inputs[0].focus()
            } else {
                inputs[index + 1].focus()
            }
        }
    })
}) */


const btnAgregarProd = document.querySelector("#btnAgregar")


const agregarProducto =() =>{
    debugger
    let id = NUEVOID()
    let nombre = inputNombreProd.value.toUpperCase()
    let medida = inputMedida.value.toUpperCase()
    let color = inputColor.value.toUpperCase() 
    let precio = inputPrecio.value.toUpperCase()
    let precioFinal = Number((precio * IVA).toFixed(2))
    Productos.push(new Producto (id, nombre, medida, color, precio, precioFinal))
    //ListaDeProductos.innerHTML=""
    cargarProductos(Productos)
    console.table(Productos)
}
btnAgregarProd.addEventListener("click", ()=> agregarProducto)
/* const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault()
        enviar()
}) */