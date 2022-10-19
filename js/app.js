/* 
const carrito = []
let vinos = []
let contenidoHTML = ""

const activarClicks = ()=> {
    let botones = document.querySelectorAll("button.card-button")
        botones.forEach(boton => boton.addEventListener("click", (e)=> agregarAlCarrito(e)))
    let imagenes = document.querySelectorAll(".card img")
        imagenes.forEach(imagen => imagen.addEventListener("click", (e)=> verDetalle(e.target.id)))
}

document.querySelector(".dialog-close").addEventListener("click", ()=> document.querySelector("dialog").removeAttribute("open"))

const verDetalle = (id)=> {
    const etiqueta = vinos.find(etiqueta => etiqueta.id === parseInt(id))
          if (etiqueta) {
              document.querySelector("dialog").setAttribute("open", "true")
              document.querySelector("#detalleCategoria").textContent = etiqueta.categoria
              document.querySelector("#detalleImagen").textContent = etiqueta.imagen
              document.querySelector("#detalleTitulo").textContent = etiqueta.nombre
              document.querySelector("#detalleBodega strong").textContent = etiqueta.bodega
              document.querySelector("#detalleNotas").textContent = etiqueta.notas
              document.querySelector("#detalleImagen").src = `images/${etiqueta.imagen}`
          }
}

const agregarAlCarrito = (event)=> {
    let item = vinos.find(etiqueta => etiqueta.id === parseInt(event.target.id))
        item !== undefined && carrito.push(item)
        console.clear()
        console.table(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
} */