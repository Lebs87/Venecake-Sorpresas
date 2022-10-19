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

// FOOTER _____ EVENTO SUSCRIPCION DE USUARIOS A NEWSLETTER
                //ALERTA DE SWEETALERT2
const eventoNewsLetter = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (eventoNewsLetter) => {
        eventoNewsLetter.addEventListener('mouseenter', Swal.stopTimer)
        eventoNewsLetter.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
const newsLetterError = ()=> {  
    eventoNewsLetter.fire({
    icon: 'error',
    title: 'Suscripción no enviada'
  })
}
const newsLetterSuccess = ()=> {  
    eventoNewsLetter.fire({
      icon: 'success',
      title: 'Suscripción enviada'
    }).then(()=>{
      inputNewsletter.value = ""
    })
}
                //EVENTO SIMULA SUSCRIPCIÓN A NEWSLETTER
const suscripcionNewsletter = () => {
    let param = inputNewsletter.value
    param !== "" ? newsLetterSuccess() : newsLetterError()
}
enviarNewsLetter.addEventListener("click", suscripcionNewsletter)
inputNewsletter.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      event.preventDefault();
      suscripcionNewsletter()
    }
  });