// CARRITO DE COMPRAS
let carroDeCompras = [];

// ARRAY de todos los calzados
const calzados = [calzado1, calzado2, calzado3, calzado4, calzado5, calzado6]

// VARIABLES
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector ('#modal-body')
const listaProductos = document.querySelector('#cardContainer')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')


cargarEventListeners();
function cargarEventListeners () {
    listaProductos.addEventListener('click', agregarProducto)
}


function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('botonCarrito') ) {
        const productoSeleccionado = e.target.parentElement.parentElement

        leerDatosProductos(productoSeleccionado);
    }
}

// lee contenido del HTML y extrae info del producto
function leerDatosProductos (calzado){
    //console.log(calzado);

    const infoProducto = {
        imagen: calzado.querySelector('img').src,
        datos: calzado.querySelector('h4').textContent,
        precio: calzado.querySelector('p').textContent,
        id: calzado.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    
    carroDeCompras = [...carroDeCompras, infoProducto ];
    
    console.log(carroDeCompras);

    carritoHTML();
}

function carritoHTML () {
    carroDeCompras.forEach ((calzado) => {
        console.log(calzado);
        const row = document.createElement ('div');
        row.classList.add('formatoCarrito')
        row.innerHTML = `
        <div>
            <img src="${calzado.imagen}" width="100px" >
        </div>
        <div> ${calzado.datos} </div>
        <div> ${calzado.precio}</div>
        <div> ${calzado.cantidad}</div>
        `;

        contenedorCarrito.appendChild(row);
    })
}

//Eliminar los productos del carrito

function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}


















// FUNCIONES
const renderizarListaProductos = () => {
    calzados.forEach((calzado) => {
        const cardCalzados = document.createElement ('div')
        cardCalzados.classList.add('cards')
        cardCalzados.setAttribute('data-id', calzado.id)
        cardCalzados.innerHTML = `
            <img class="cardImagenes"  src="${calzado.image}" alt="">
            <h4 class="cardTextos"> ${calzado.marca} ${calzado.modelo}</h4> 
            <p class="cardTextos">$${calzado.precio}</p>
            <div>
                <button class="botonCarrito" data-id='${calzado.id}' >Agregar al carrito</button>
            </div>
        `
        listaProductos.append (cardCalzados)
    })
}



renderizarListaProductos()

























/*
const cardTextos = document.querySelector('.cardTextos')
const cardImagenes = document.querySelector('.cardImagenes')

const cardBotonCarrito = document.querySelector('.botonCarrito')




    const agregarProductos = (e) => {
        const calzadoId = e.target.getAttribute('data-id')
        const calzadoSeleccionado = calzados.find((calzado) => calzado.id == calzadoId )
 
        console.log(calzadoSeleccionado);
    }
 
//EJECUTAR

renderizarListaProductos()
*/