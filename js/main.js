const categorias = ["Cocina", "Living", "Oficina", "Baño", "Dormitorio"]
const selectCategoria = document.querySelector(".selectCategorias")

const productos = document.querySelector ("#articulos")
const cantidad = document.querySelector ("#cantidades")
const btnTotal = document.querySelector ("#totalizar")
const importeFinal = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")

const datosProductos = [
    {descripcion: "Silla Escandinava", precio: 5000},
    {descripcion: "Mesa Rustica", precio: 15000},
    {descripcion: "Alacena", precio: 10000},
    {descripcion: "Mesa Escandinava", precio: 20000},
]

const IVA = 1.21

function cargarCategorias() {
    categorias.sort()
    categorias.forEach(categoria => {
        selectCategoria.innerHTML += `<option value="">${categoria}</option>`
    })
}

class Carrito {
    constructor(unidades, precioArticulo, impuesto){
        this.unidades = parseInt(unidades)
        this.precioArt = parseFloat(precioArticulo)
        this.impuesto = parseFloat(impuesto)
    }
    totalizar () {
        let resultado = (this.unidades * this.precioArt * this.impuesto).toFixed(2)
        return '$ ' + resultado.toLocaleString()
    }
}

const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.precio}">${elemento.descripcion}</option>`
        })
    } else {
        btnTotal.disabled = true
    }
}

cargarCombo(productos, datosProductos)

const datosCompletos = ()=> { 
    if (productos.value !== "..." && parseInt(cantidad.value)) {
        return true
    } else {
        return false 
    }
}

const calcularTotal = ()=> { 
    if (datosCompletos()) {
        const totalAPagar = new Carrito (cantidad.value, productos.value, IVA)
        importeFinal.innerText = totalAPagar.totalizar()
        btnEnviar.classList.remove("ocultar")
    } else {
        return false
    }
}

const enviarPorEmail = ()=> { 
    const envio = {
        fechaEnvio: new Date().toLocaleString(),
        productos: productos[productos.selectedIndex].text,
        cantidad: cantidad.value,
        total: importeFinal.innerText
    }
    localStorage.setItem("UltimoEnvio", JSON.stringify(envio))
    alert("✅ Enviado")
    btnEnviar.classList.add("ocultar")
}

function recuperoDatos() {
    productos.value = localStorage.getItem("productos")
    cantidad.value = localStorage.getItem("cantidad")
    total.value = localStorage.getItem("total")
}

btnTotal.addEventListener("click", calcularTotal)
btnEnviar.addEventListener("click", enviarPorEmail)