// CLASE CONSTRUCTORA DEL OBJETO PRODUCTO
class Producto {
    constructor(id, nombre, medida, color, precio, precioFinal, descripcion, imagenGlobo, cantidad) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.color = color
        this.precio = precio
        this.precioFinal = precioFinal
        this.descripcion = descripcion
        this.imagenGlobo = imagenGlobo
        this.cantidad = cantidad
    }
}

//BASE DE DATOS PARA ARRAY PRODUCTOS
const dataBase =()=> {
	Productos.push(new Producto(955875, "GLOBO NUMERICO", "5", "ROJO", 5000, 5500, "De garn utilidad para los arreglos de bouquets.", "fondoGlobos4.jpg", 0))
	Productos.push(new Producto(955876, "GLOBO DE AGUA", "4", "VERDE", 3000, 3630, "Necesarios para bases firmes en el decorado.", "fondoGlobos4.jpg", 0))
	Productos.push(new Producto(955877, "GLOBO PAYASO", "3", "AMARILLO", 3500, 4235, "Globo infantil con forma de payaso amarilo.", "fondoGlobos4.jpg", 0))
    Productos.push(new Producto(955878, "GLOBO PAYASO", "3", "AZUL", 3500, 4235, "Globo infantil con forma de payaso azul tamaño pequeño.", "fondoGlobos4.jpg", 0))
    Productos.push(new Producto(955879, "GLOBO PAYASO", "4", "AZUL", 4000, 4840, "Globo infantil con forma de payaso azul tamaño mediano.", "fondoGlobos4.jpg", 0))
    Productos.push(new Producto(955880, "GLOBO PAYASO", "4", "ROJO", 4000, 4840, "Globo infantil con forma de payaso rojo tamaño mediano.", "fondoGlobos4.jpg", 0))
    Productos.push(new Producto(955881, "GLOBO FLOR", "4", "ROJO", 4000, 4840, "Globo en forma de flor, útil para los arreglos de bouquets.", "fondoGlobos4.jpg", 0))
}
dataBase()