const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Cuando agrego productos al carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Eliminar cosas del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Vaciar carro
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //LLAMADA AL DOM
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido a la pagina de compra
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}
