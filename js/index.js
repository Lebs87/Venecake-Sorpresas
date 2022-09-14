// Clase constructora de producto
class Producto {
    constructor(id, nombre, medida, color, precio, precioFinal) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.color = color
        this.precio = "$ " + precio
        this.precioFinal = "$ " + precioFinal
    }
}

//Base de Datos
function dataBase() {
	Productos.push(new Producto(955875, "Globo numérico", "5", "rojo", "5000", "5500"))
	Productos.push(new Producto(955876, "Globo de agua", "4", "verde", "3000", "3630"))
	Productos.push(new Producto(955877, "Globo payaso", "3", "amarillo", "3500", "4235"))
    Productos.push(new Producto(955878, "Globo payaso", "3", "azul", "3500", "4235"))
    Productos.push(new Producto(955879, "Globo payaso", "4", "azul", "4000", "4840"))
    Productos.push(new Producto(955880, "Globo payaso", "4", "rojo", "4000", "4840"))
    Productos.push(new Producto(955880, "GLOBO", "4", "rojo", "4000", "4840"))
}
dataBase()