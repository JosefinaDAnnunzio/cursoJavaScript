let usuario = ""
let password = ""
let login = false

while(login === false){
    usuario = prompt("Ingresar usuario:")
    password = prompt("Ingresar contraseña")
    if(usuario === "Josefina" && password === "Coder123") {
        console.log("Hola", usuario)
        login = true
    } else {
        alert ("Usuario y/o contraseña incorrectos")
    }
}