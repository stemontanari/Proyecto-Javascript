// CARRITO DE COMPRAS
let carroDeCompras = [];

// ARRAY de todos los calzados
let calzados = [];

// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector ('#modal-body');
const listaProductos = document.querySelector('#cardContainer');
const vaciarCarritoBtn = document.querySelector('#vaciar');
const finalizarCompra = document.querySelector('#finalizarCompra');
const totalCompra = document.querySelector('#total');


//LISTENERS 
cargarEventListeners();

function cargarEventListeners () {

    listaProductos.addEventListener('click', agregarProducto)

    carrito.addEventListener('click', eliminarProducto)

    document.addEventListener('DOMContentLoaded', () => {
        carroDeCompras = JSON.parse (localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    vaciarCarritoBtn.addEventListener('click', () => {
        carroDeCompras = [];

        limpiarHTML();
    })

    finalizarCompra.addEventListener('click', () => {
        Swal.fire(
            'Compra exitosa!',
            'Su compra fue registrada con exito!',
            'success'
        )
    })
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
                <button id="botonazi" class="agregarAlCarrito" data-id='${calzado.id}' >Agregar al carrito</button>
            </div>
        `
        listaProductos.append (cardCalzados)
    })
}

// agregar productos al carrito
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarAlCarrito') ) {
        const productoSeleccionado = e.target.parentElement.parentElement

        leerDatosProductos(productoSeleccionado);

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito con exito!'
        })
    }
    
}

// eliminar productos del carrito
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
    const existeProducto = carroDeCompras.some((producto) => producto.id === infoProducto.id)
    if (existeProducto) {
        const producto = carroDeCompras.find((producto) => producto.id === infoProducto.id)
        producto.cantidad ++ 

    } else {
        carroDeCompras.push(infoProducto)
    }
    
    limpiarHTML();
    carritoHTML();
}

//Productos adentro del carrito
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

    sincronizarStorage();
}

//Suma total del precio de los productos
function sumaTotal () {
    

}
sumaTotal ();


/*const getAllCalzados = async () => {
    const response = await fetch('../json/calzados.json')
    const data = await response.json()
    calzados = data
    renderizarListaProductos(calzados)
}
*/

fetch('../json/calzados.json')
    .then((response) => response.json())
    .then((data) => {
        calzados = data
        renderizarListaProductos(calzados)
    })




//Eliminar los productos del carrito
function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}


// STORAGE
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carroDeCompras));
}


// EJECUTAR
//getAllCalzados()

