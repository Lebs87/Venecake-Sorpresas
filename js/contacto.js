// EVENTO ENVIO DE FORMULARIO
const eventoContacto = () => {
    Swal.fire({
    title: '¡Gracias por elegirnos, Pronto te contactaremos!',
    width: 600,
    padding: '3em',
    color: 'hsl(300, 89%, 24%)',
    background: '#fff url(../assets/images/fondoBtnContacto.jpg)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("../assets/images/confetti.webp")   
      left top
      repeat
    `
    }).then((result) => {
      result.isConfirmed ? location.href = "../index.html" : swalWithBootstrapButtons.fire('¡Error al enviar!','success')
    })
  }
  btnEnviar.addEventListener("click", eventoContacto)

  // ELIMINAR DATOS DE LOCALSTORE
const eliminarDatos = () =>{
  event.preventDefault()
  localStorage.removeItem("nombre",inputNombre.value)
  localStorage.removeItem("apellido",inputApellido.value)
  localStorage.removeItem("email",inputEmail.value)
  localStorage.removeItem("fechaEvento",inputDate.value)
  localStorage.removeItem("comentarios",inputComentarios.value)
  inputNombre.value = ""
  inputApellido.value = ""
  inputEmail.value = ""
  inputDate.value = ""
  inputComentarios.value = ""
}
btnEnviar.addEventListener("click",eliminarDatos)

// GUARDAR DATOS EN LOCALSTORE
const guardarDatos = () =>{
localStorage.setItem("nombre",inputNombre.value)
localStorage.setItem("apellido",inputApellido.value)
localStorage.setItem("email",inputEmail.value)
localStorage.setItem("fechaEvento",inputDate.value)
localStorage.setItem("comentarios",inputComentarios.value)
}
inputNombre.addEventListener("input",guardarDatos)
inputApellido.addEventListener("input",guardarDatos)
inputEmail.addEventListener("input",guardarDatos)
inputDate.addEventListener("input",guardarDatos)
inputComentarios.addEventListener("input",guardarDatos)

// RECUPERAR DATOS EN LOCALSTORE
const recuperarDatos = () =>{
  nombreContacto == null ? inputNombre.value = "Prueba1" : inputNombre.value = localStorage.getItem("nombre") 
  apellidoContacto == null ? inputApellido.value = "Prueba2" : inputApellido.value = localStorage.getItem("apellido") 
  emailContacto == null ? inputEmail.value = "3email@gmail.com" : inputEmail.value = localStorage.getItem("email")
  dateContacto == null ? inputDate.value = "2022-12-04" : inputDate.value = localStorage.getItem("fechaEvento") 
  commentContacto == null ? inputComentarios.value = "Campo autocompletado con value desde documento js para Proyecto Final" : inputComentarios.value = localStorage.getItem("comentarios")
}
document.addEventListener("DOMContentLoaded", recuperarDatos)