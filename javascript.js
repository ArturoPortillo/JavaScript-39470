/* VARIABLES PARA CARGAR DATOS DE USUARIO NUEVO */
let newUser = ""
let newPassword = ""

/* FUNCION PARA CREAR USUARIO */
    function createUser() {
        newUser = prompt("Ingrese nuevo nombre de usuario: ").toLowerCase().trim().replace(/\s+/g, '')
        newPassword = prompt("Ingrese nueva contraseña: ").toLowerCase().trim().replace(/\s+/g, '')

        alert("Usuario creado! ✅ ingrese datos para ingresar al sistema.\n Nombre de usario: " + newUser + "\n Contraseña: *****")

        console.log("Usuario creado! ✅ ingrese datos para ingresar al sistema.\n Nombre de usario: " + newUser + "\n Contraseña: "+newPassword)
    }

/* DATOS DE UN USUARIO YA EXISTENTE */
let userName = ""
let password = ""

/* FUNCION DE LOG IN*/
    function logIn() {
        do {   
        /* En esta parte use una formula de RegEx para evitar que puedan crear usuarios con espacios en blanco como "PE DRO" */
            userName = prompt("Ingrese nombre de usuario para iniciar sesion: ").toLowerCase().trim().replace(/\s+/g, '')  
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
    }

/* Al "ingresar" al sistema deberiamos tener un plano con "Mesas" cada mesa tiene un "ID", al entrar al a mesa cargamos articulos, que se van sumando a la mesa sumando el valor total de los articulos de la mesa */



/* Base de datos de articulos en el sistema */


console.log("La idea del proyecto seria una vez ingresar al sistema tener un plano con mesas, cada vez que abrimos una mesa se abre una ventana, cargamos articulos, se suman los valores, esos valores sumarse a la facturacion final del dia y mostrarlo en un resumen de ventas.\n\nTengo mucho con qué jugar, puedo crear un listado de personal al abrir una mesa asignar una persona dueña de la mesa, al final la facturacion que sea total y separar cuanto vendio cada persona.\n\nUna vez aplique DOM al proyecto sumando LocalStorage deberia poder lograr que cada mesa guarde su contenido al abrirse y cerrarse la pagina, esto sumado a crear una funcion que al 'cobrar' la mesa sume el total de la mesa a otro array y luego se vacie el array de la mesa cobrada para dar lugar a una nueva\n\nPor el momento desgloso el funcionamiento del desafio #2:\n\n")

console.log("TENEMOS UNA BASE DE DATOS CON ITEMS:")


const itemsDB = [
    { id: 1, item: 'Café con leche', price: 450 },
    { id: 2, item: 'Desayuno Clasico con Medialunas o Tostadas', price: 750 },
    { id: 3, item: 'Tostado jamon y queso', price: 900 },
    { id: 4, item: 'Exprimido de Naranja', price: 800 },
    { id: 5, item: 'Almuerzo Ejecutivo', price: 2200 },
    { id: 6, item: 'Agua 500ml', price: 390 },
    { id: 7, item: 'Gaseosa', price: 390 },
];

console.table(itemsDB)

/* funcion de objetos para cargar nuevos articulos a nuestra base de datos*/


console.log("EJECUTA LA FUNCION  'itemsToDB()' PARA AGREGAR ITEMS A NUESTRA BASE DE DATOS Y EXPANDIRLA\n\n")

function itemToDB() {
    const newItem = {
        id: itemsDB.length + 1,
        item: prompt("Ingrese nombre del articulo:"),
        price: parseInt(prompt("Ingrese precio del articulo:"))
    };

    itemsDB.push(newItem);
}

/* Mesa vacia  */

console.log("TENEMOS UN ARRAY VACIO LLAMADO 'TABLE' QUE SERA NUESTRA 'MESA' PARA AGREGAR ARTICULOS CONFORME EL 'CLIENTE' PIDA:\n\n")

const table = []

console.log(table)

/* Funcion para agregar articulos a la mesa  */

console.log("EJECUTA LA FUNCION  'addItem()' PARA AGREGAR ITEMS A LA MESA VACIA EN BASE AL 'ID' dentro de 'itemsDB'\n\n")

function addItem() {
    table.push(itemsDB[parseInt(prompt("Ingrese ID del articulo:"))-1]);

    /* Calcular valor de mesa */

    let totalPrice = 0;

for (let i = 0; i < table.length; i++) {
totalPrice += table[i].price;
}
console.table(table)
console.log("El valor total de la mesa es: " + totalPrice)
}

/* Calcular valor de mesa, lo uso dentro de la funcion AddItem */

/* function tableValue() {
let totalPrice = 0;

for (let i = 0; i < table.length; i++) {
totalPrice += table[i].price;
}
console.log(totalPrice)
}
 */