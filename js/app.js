// CARRITO DE COMPRAS
let carroDeCompras = [];

// ARRAY de todos los calzados
const calzados = [calzado1, calzado2, calzado3, calzado4, calzado5, calzado6]

// VARIABLES
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector ('#modal-body')
const listaProductos = document.querySelector('#cardContainer')
const vaciarCarritoBtn = document.querySelector('#vaciar')



cargarEventListeners();
function cargarEventListeners () {

    listaProductos.addEventListener('click', agregarProducto)

    carrito.addEventListener('click', eliminarProducto)

    vaciarCarritoBtn.addEventListener('click', () => {
        carroDeCompras = [];

        limpiarHTML();
    })
}


function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('botonCarrito') ) {
        const productoSeleccionado = e.target.parentElement.parentElement

        leerDatosProductos(productoSeleccionado);
    }
}

function eliminarProducto (e) {
    if(e.target.classList.contains('borrar-calzado')) {
        const calzadoId = e.target.getAttribute('data-id')

        carroDeCompras = carroDeCompras.filter ( calzado => calzado.id !== calzadoId);
        
        limpiarHTML();
        carritoHTML();
    }
}

// lee contenido del HTML y extrae info del producto
function leerDatosProductos (calzado){
    const infoProducto = {
        imagen: calzado.querySelector('img').src,
        datos: calzado.querySelector('h4').textContent,
        precio: calzado.querySelector('p').textContent,
        id: calzado.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    //verificar si el producto existe en el carrito y sumar la cantidad y no repetetirlo
    const existeProducto = carroDeCompras.some((producto) => producto.id === infoProducto.id)
    if (existeProducto) {
        const producto = carroDeCompras.find((producto) => producto.id === infoProducto.id)
        producto.cantidad += 1
    } else {
        carroDeCompras.push(infoProducto)
    }
    
    limpiarHTML();
    carritoHTML();
}

function carritoHTML () {
    carroDeCompras.forEach ((calzado) => {
        const {imagen, datos, precio, cantidad, id} = calzado;
        const row = document.createElement ('div');
        row.classList.add('formatoCarrito')
        row.innerHTML = `
        <div>
            <img src="${imagen}" width="100px" >
        </div>
        <div> ${datos} </div>
        <div> ${precio}</div>
        <div> ${cantidad}</div>
        <div>
            <a href="#" class="borrar-calzado" data-id="${id}" > X </a>
        </div>
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