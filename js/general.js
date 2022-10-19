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