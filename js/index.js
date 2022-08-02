function ingresarNombre(){
    alert("Bienvenido a DecoHogar")
    let nombre = prompt ("Ingrese su nombre");
    while(nombre === "" || nombre === null){
        nombre = prompt ("Ingrese su nombre");
    }
}

function listaProductos(){

    let producto;

    do{
        producto = prompt ("Elegir un producto: \n 1. Mesa \n 2. Silla \n 3. Cuadro");
    } while(producto != 1 && producto != 2 && producto != 3);

    switch(producto){
        case "1":
            return "Mesa"
        case "2":
            return "Silla"
        case "3":
            return "Cuadro"
    }
}

function listaPrecios (producto){
    if(producto === "Mesa") {
        return 20000;
    } else if (producto === "Silla") {
        return 7000;
    } else {
        return 2500;
    }
}

function cobranza(producto, precio){
    alert("Producto seleccionado:"+ producto +"\n Precio $"+ precio);
    let pagoCliente = prompt("¿Con cuánto paga?")
    if (pagoCliente > precio){
        alert("Su vuelto es $" + (pagoCliente - precio))
    } else {
        alert("El saldo es insuficiente para concretar la compra.")
    }
}

ingresarNombre();
let productoElegido = listaProductos();
let precioProducto = listaPrecios(productoElegido);
cobranza(productoElegido, precioProducto);

