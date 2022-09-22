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
const dataBase =()=> {
	Productos.push(new Producto(955875, "GLOBO NUMERICO", "5", "ROJO", 5000, 5500))
	Productos.push(new Producto(955876, "GLOBO DE AGUA", "4", "VERDE", 3000, 3630))
	Productos.push(new Producto(955877, "GLOBO PAYASO", "3", "AMARILLO", 3500, 4235))
    Productos.push(new Producto(955878, "GLOBO PAYASO", "3", "AZUL", 3500, 4235))
    Productos.push(new Producto(955879, "GLOBO PAYASO", "4", "AZUL", 4000, 4840))
    Productos.push(new Producto(955880, "GLOBO PAYASO", "4", "ROJO", 4000, 4840))
    Productos.push(new Producto(955880, "GLOBO FLOR", "4", "ROJO", 4000, 4840))
}
dataBase()