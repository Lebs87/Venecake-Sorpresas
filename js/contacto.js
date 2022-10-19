// FOOTER _____ EVENTO ENVIO DE FORMULARIO
const eventoContacto = () => {
    Swal.fire({
    title: '¡Gracias por elegirnos, Pronto te contactaremos!',
    width: 600,
    padding: '3em',
    color: 'hsl(300, 89%, 24%)',
    background: '#fff url(../assets/images/fondoBtnContacto.jpg)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("../assets/images/imgSinUsar/confetti-50.webp")
      left top
      repeat
    `
    }).then((result) => {
      result.isConfirmed ? location.href = "../index.html" : swalWithBootstrapButtons.fire('¡Error al enviar!','success')
    })
  }
  btnEnviar.addEventListener("click", eventoContacto)