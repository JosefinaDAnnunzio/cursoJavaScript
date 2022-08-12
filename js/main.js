const categorias = ["Cocina", "Living", "Oficina"]
const productos = [
    {descripcion: "Silla Escandinava", precio: 5000},
    {descripcion: "Mesa Rustica", precio: 15000},
    {descripcion: "Alacena", precio: 10000},
    {descripcion: "Mesa Escandinava", precio: 20000},
]
const IVA = 1.21

//producto - OBJETO CONSTRUCTORA
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

function listarCategorias() {   //arrays categorias
    for (let i = 0; i < categorias.length; i++) {
        console.log(categorias[i])
    }
}

function agregarCategoria() {
    let nuevaCategoria = prompt("Ingresa una nueva categoría:")
    let resultado = categorias.includes(nuevaCategoria)
        if (!resultado) { 
            categorias.push(nuevaCategoria)
        } else {
            console.warn("La categoría", nuevaCategoria, "ya figura en la lista.")
        }
}

function quitarCategoria() {
    let aQuitar = prompt("Ingrese la categoría a quitar del array:")
    let indice = categorias.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = categorias.splice(indice, 1)
        console.warn("Se ha eliminado la categoría:", resultado)
    } else {
        console.error("No se ha encontrado la categoría", aQuitar)
    }
}

//array de productos
function generacionID() { return parseInt(Math.random() * 100000) }

function agregarProductos() {
    let id = generacionID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let importe = parseInt(prompt("Ingresa el importe:"))
    let stock = parseInt(prompt("Ingrese el stock:"))
        productos.push(new Producto(id, descripcion, importe, stock))
        console.table(productos)
}

function buscarProductos() {
    let prod = prompt ("Ingrese el producto a buscar:")
    const resultado = productos.filter(producto => producto.descripcion.includes(prod))
    console.table(resultado)
}

