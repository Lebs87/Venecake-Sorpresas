// ARRAYS DEL PROYECTO
const Productos = [] //ELIMINAR
const Carrito = []
let globos = []

//VARIABLES 
let documentoModelos = ""

//CONSTANTES DE LOS PRODUCTOS PUBLICADOS
const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const IVA = 1.21
const URL = "../dataBase/globos.json"

//CONSTANTES DE CONTACTOS
const nombreContacto = localStorage.getItem("nombre")
const apellidoContacto = localStorage.getItem("apellido")
const emailContacto = localStorage.getItem("email")
const dateContacto = localStorage.getItem("fechaEvento")
const commentContacto = localStorage.getItem("comentarios")