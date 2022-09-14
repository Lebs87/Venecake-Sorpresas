//////////////////// FUNCTIONS EMPLEADAS EN DESAFÍOS ANTERIORES

//Filtrado de los elementos de la dataBase
function filtrarPorNombre() {
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
}