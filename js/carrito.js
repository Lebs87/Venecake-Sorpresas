// RECUPERAR PRODUCTOS DEL ARRAY CARRITO
const recuperoCarrito = () => {
    if (localStorage.getItem("carritos") !== null){
    let carrito = JSON.parse(localStorage.getItem("carritos"))
        carrito.forEach(prod => {
            let articulosCarrito = `<article class="card p-3">
                            <div class="row g-0">
                                <section class="col-md-3">
                                    <img src="../assets/images/${prod.imagenGlobo}" class="img-fluid rounded-start imagenCarrito" alt="...">
                                </section>
                                <div class="col-md-9 row g-0">
                                    <section class="col-md-6 d-flex justify-content-center align-items-center p-2">
                                        <div class="card-body ">
                                            <h5 class="card-title">${prod.nombre}</h5>
                                            <p class="card-text"><small class="text-muted">ID: ${prod.id}</small></p>
                                        </div>
                                    </section>
                                    <section class="col-md-3 d-flex justify-content-center align-items-center p-2">
                                    <div class="cantidad d-flex justify-content-center">
                                        <button id="disminuir"> - </button>
                                        <input type="number" min="1" max="100" step="1" value="${prod.cantidad}" id="inputCantidad" readonly>
                                        <button id="aumentar" > + </button>
                                    </div>
                                    </section>
                                    <section class="col-md-3 d-flex justify-content-center align-items-center p-2">
                                        <p><b>${prod.precioFinal}</b></p>
                                    </section>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <span class="material-symbols-outlined mx-2 mb-1">delete</span>
                                <span class="material-symbols-outlined mx-2 mb-1">visibility</span>
                            </div>
                        </article>`
            listaDeCarrito.innerHTML += articulosCarrito
        });
    const cargaGeneralCarrito = () => {
    let totalCompra = `<p><b>parametro</b></p>`
    let finalizarCompra = `<button class="btn btn-danger">Continuar Compra</button>`
        datosTotales.innerHTML += totalCompra
        btnComprar.innerHTML += finalizarCompra
    }
    cargaGeneralCarrito()
    }else{const carritoVacio = () => {
        let listaVacia = `<h3>Tu carrito está vacío.</h3>
                        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>`
        listaDeCarrito.innerHTML += listaVacia
        }
        carritoVacio()
    }   
}
recuperoCarrito()

const compraFinalizada = () => {
    Swal.fire({
        title: '¿Quieres completar la compra?',
        text: "Se te enviará un detalle por mail.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff545452',
        cancelButtonColor: '#a52a2a',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Compra Realizada',
            'success'
          )
        }
      })
}
btnComprar.addEventListener("click", compraFinalizada)

//RECUPERAR ARRAY CARRITOS
const recuperarCarrito = () => {
    localStorage.getItem("carritos") ? carritos = JSON.parse(localStorage.getItem("carritos")) : console.log("No se encontró nada")
}
recuperarCarrito()

const calcularTotal = () => {
    const valorConIVA = carritos.precioFinal
    const total = valorConIVA.reduce((tot, pres) => tot + pres, 0)
    let leyenda = document.getElementById("total")
    total > 0 ? leyenda.innerText = `El total de su compra será de $ ${total}` : leyenda.innerText = `No ha agregado nada al presupuesto.`
    total > 0 ? btnFinalizar.addEventListener("click", CompletarCompra) : btnFinalizar.addEventListener("click", CarritoVacio)
}


//CANTIDAD DE PRODUCTOS A COMPRAR
/* const cambiarCantidad = (x) => {
    let id = x;
    let min = cantidadProducto.min;
    let max = cantidadProducto.max;
    let step = cantidadProducto.step;
    let val = cantidadProducto.value;
    let cambio = (id == "aumentar") ? (step*1) : (step * -1);
    let nuevoValor = parseInt(val) + cambio;
    nuevoValor >= min && nuevoValor <= max ? cantidadProducto.value = nuevoValor : console.log("Hay un error en carrito js, const cambiar cantidad")
}
btnDisminuir.addEventListener("mousedown", ()=>(cambiarCantidad("disminuir")))
btnAumentar.addEventListener("mousedown", ()=>(cambiarCantidad("aumentar"))) */


let DESC = -35000 || 0
//Reduce a un único resultado valores de un array
const calcularCarrito = () => {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, DESC)
    console.log("Total del carrito:", total)
}
/////////////////trabajar calcular carrito



//REMOVIENDO LOS PRODUCTOS DEL CARRO
/* function remove(e) {
    let idProd;
    if (e.target.classList.contains("remove")) {
        idProd = e.target.getAttribute("data-id");
        idProd = cart.find((element) => element.name == idProd);
    }

    if (idProd.quantity === 1) {
        let product = cart.find((prod) => prod.name == idProd.name);
        let index = cart.indexOf(product);
        cart.splice(index, 1);
        updateCart(cart);

    } else if (idProd) {
        idProd.quantity--;
        updateCart(cart)
    }
    saveInLocalStorage("cart", cart)
} */








///el mejor de todos
/* const presupuesto = JSON.parse(localStorage.getItem("presupuesto"))
const btnFinalizar = document.getElementById("btn-finalizar") */

/* Funciones */
/* function recuperoPresupuesto() {
    let tabla = document.getElementById("tablaPresupuesto")
    presupuesto.forEach(ilust => {
        let fila = `<tr id="row${ilust.id}">
                                    <td>${ilust.nombre}</td>
                                    <td>${ilust.precio}</td>
                                    <td><a id="btn${ilust.id}"<a class="waves-effect waves-light material-icons">delete</a></td>
                                <tr>`
                            tabla.innerHTML += fila
    });
}

function BotonEliminar() {
    presupuesto.forEach(ilust => {
        const btnPres = document.querySelector(`#btn${ilust.id}`)
        btnPres.addEventListener("click", () => EliminarPresupuesto(`${ilust.id}`))
    })
}

function calcularTotal () {
    const total = presupuesto.reduce((tot, pres) => tot + pres.precio, 0)
    let leyenda = document.getElementById("total")
    total > 0 ? leyenda.innerText = `El total de su compra será de $ ${total}` : leyenda.innerText = `No ha agregado nada al presupuesto.`
    total > 0 ? btnFinalizar.addEventListener("click", CompletarCompra) : btnFinalizar.addEventListener("click", CarritoVacio)
}

function EliminarPresupuesto(id) { 
    let indice = presupuesto.find ( p => p.id == id)
    let aEliminar = presupuesto.indexOf(indice,0)
    presupuesto.splice(aEliminar,1)
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
    let fila = document.getElementById(`row${id}`)
    fila.remove()
    calcularTotal()
}

function CompletarCompra() {
    Swal.fire({
        title: '¿Quieres completar la compra?',
        text: "Se te enviará un detalle por mail.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff545452',
        cancelButtonColor: '#a52a2a',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Compra Realizada',
            'success'
          )
        }
      })
}



/* LLamado a Funciones */
/* recuperoPresupuesto()
BotonEliminar()
calcularTotal() */