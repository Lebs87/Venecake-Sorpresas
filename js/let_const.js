// ARRAYS DEL PROYECTO
    // TIENDA.JS
const Productos = [] //ELIMINAR
const Carrito = []
let globos = []

// VARIABLES 
    // TIENDA.JS
let documentoModelos = ""

//CONSTANTES
    // TIENDA.JS
const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const IVA = 1.21
const URL = "../dataBase/globos.json"

    // CONTACTO.JS
const nombreContacto = localStorage.getItem("nombre")
const apellidoContacto = localStorage.getItem("apellido")
const emailContacto = localStorage.getItem("email")
const dateContacto = localStorage.getItem("fechaEvento")
const commentContacto = localStorage.getItem("comentarios")