const categorias = ["Cocina", "Living", "Oficina"]
const productos = [
    {descripcion: "Silla Escandinava", precio: 5000},
    {descripcion: "Mesa Rustica", precio: 15000},
    {descripcion: "Alacena", precio: 10000},
    {descripcion: "Mesa Escandinava", precio: 20000},
]
const IVA = 1.21

class Producto {
    constructor(id, descripcion, importe, stock) {
        this.id = id
        this.descripcion = descripcion.toUpperCase()
        this.importe = importe
        this.stock = stock
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
    actualizarStock (unidades) {
        this.stock = this.stock - unidades
    }
}

const prod1 = new Producto ("110", "Silla Escandinava", 5000, 30)
const prod2 = new Producto ("111", "Mesa Rustica" , 15000, 10)
const prod3 = new Producto ("112", "Alacena" , 10000, 20)
const prod4 = new Producto ("113", "Mesa Escandinava" , 20000, 7)

const nuevoProducto = document.getElementById(".agregarProd")

function agregarProducto() {
    let nuevoProducto = document.getElementById("productoAgregado")
    let resultado = productos.includes(nuevoProducto)
    if (!resultado) { 
        productos.push(nuevoProducto)
    } else {
        return false
    }
}

const prod = document.getElementById("buscador")

function buscarProductos() {
    let prod = document.getElementById("buscador")
    const resultado = productos.filter(producto => producto.descripcion.includes(prod))
    console.table(resultado)
}

const selectCategoria = document.querySelector(".selectCategorias")

function cargarCategorias() {
    categorias.sort()
    categorias.forEach(categoria => {
        selectCategoria.innerHTML += `<option value="">${categoria}</option>`
    })
}

const botonAgregar = document.querySelector(".agregarProd")
const botonBuscar = document.querySelector(".buscarProd")


botonAgregar.addEventListener("click", agregarProducto)
botonBuscar.addEventListener("click", buscarProductos)

const contenido = document.getElementById("buscador").value;







