/* DATOS DE UN USUARIO */

if (window.location.pathname === "./index.html") {
    console.log("Saludos, ahora solo tenemos 2 opciones para ingresar, Una cuenta Admin, Una cuenta del personal para ambos el usuario y contraseña es el mismo: usuario: admin/ contraseña: admin o personal/personal respectivamente.\nEn el futuro, se crearan funciones de acuerdo al usuario, el administrador tendra derechos de borrar una mesa o borrar articulos de la misma, mientras que el Personal tendra acceso muy limitado a las funciones.");
}

let userName = ""
let password = ""

/* FUNCION DE LogIn ahora solo tenemos 2 opciones, Una cuenta Admin, Una cuenta del personal */

function logIn() {
    let userName = document.getElementById("username").value.toLowerCase().trim().replace(/\s+/g, '');
    let password = document.getElementById("password").value.toLowerCase().trim().replace(/\s+/g, '');

    if ((userName == "admin" && password == "admin") || (userName == "personal" && password == "personal"))    {

    window.location.href = "plano.html"       
    
    } else {
        let errorMsg = document.getElementById("errorMsg");
        errorMsg.innerHTML = "❌ Usuario o contraseña incorrecta.";
    }
}



/* funcion de objetos para cargar nuevos articulos a nuestra base de datos por Prompt*/

/* FUNCION AUN NO APLICADA CON DOM */
/* console.log("EJECUTA LA FUNCION  'itemsToDB()' PARA AGREGAR ITEMS A NUESTRA BASE DE DATOS Y EXPANDIRLA\n\n")

function itemToDB() {
    const newItem = {
        id: itemsDB.length + 1,
        item: prompt("Ingrese nombre del articulo:"),
        price: parseInt(prompt("Ingrese precio del articulo:"))
    };

    itemsDB.push(newItem);
}

 */


/******************* CODIGO VIEJO *********************************/


/*Antigua FUNCION DE LOG IN con Prompts y Alerts*/
/*     function logIn() {
        do {   */ 
        /* En esta parte use una formula de RegEx para evitar que puedan crear usuarios con espacios en blanco como "PE DRO" */
/*             userName = prompt("Ingrese nombre de usuario para iniciar sesion: ").toLowerCase().trim().replace(/\s+/g, '')  
            password = prompt("Ingrese contraseña: ").toLowerCase().trim().replace(/\s+/g, '')
            if (userName == newUser && newPassword == password) {
                alert("Bienvenido! "+ userName || admin +"\n Cargando interfaz de usuario...")
                console.log("Bienvenido! "+ userName +"\n Cargando interfaz de usuario...")
                alert("⛔ Sistema en mantenimiento! ⛔ intenta más tarde.")  
                console.log("⛔ Sistema en mantenimiento! ⛔ intenta más tarde.") 
                break;         
            } else {
                alert("❌ Datos de usuario incorrectos, intente nuevamente.")    
            }
        } while (userName && newPassword)
    } */

/* Calcular valor de mesa, lo uso dentro de la funcion AddItem */

/* function tableValue() {
let totalPrice = 0;

for (let i = 0; i < table.length; i++) {
totalPrice += table[i].price;
}
console.log(totalPrice)
}


/* Funcion para agregar articulos a la mesa  */


/*
function addItem() {
    
/*     table.push(itemsDB[parseInt(prompt("Ingrese ID del articulo:"))-1]); */

    /* Calcular valor de mesa */

/*     let totalPrice = 0;

for (let i = 0; i < table.length; i++) {
totalPrice += table[i].price;
}
console.table(table)
console.log("El valor total de la mesa es: " + totalPrice)
} */

/* VARIABLES PARA CARGAR DATOS DE USUARIO NUEVO */

/* let newUser = "admin"
let newPassword = "admin"
 */
/* FUNCION cancelada PARA CREAR USUARIO */

    /* FUNCION PAUSADA, YA QUE DECIDI AVANZAR CON 2 USUARIOS BASE, ADMINISTRADOR Y PERSONAL ambos tendran permisos diferentes conforme avance el proyecto */

/*     function createUser() {
        newUser = prompt("Ingrese nuevo nombre de usuario: ").toLowerCase().trim().replace(/\s+/g, '')
        newPassword = prompt("Ingrese nueva contraseña: ").toLowerCase().trim().replace(/\s+/g, '')

        alert("Usuario creado! ✅ ingrese datos para ingresar al sistema.\n Nombre de usario: " + newUser + "\n Contraseña: *****")

        console.log("Usuario creado! ✅ ingrese datos para ingresar al sistema.\n Nombre de usario: " + newUser + "\n Contraseña: "+newPassword)
    } */


