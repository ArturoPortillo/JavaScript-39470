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
                alert("Bienvenido! "+ userName +"\n Cargando interfaz de usuario...")
                console.log("Bienvenido! "+ userName +"\n Cargando interfaz de usuario...")
                alert("⛔ Sistema en mantenimiento! ⛔ intenta más tarde.")  
                console.log("⛔ Sistema en mantenimiento! ⛔ intenta más tarde.") 
                break;         
            } else {
                alert("❌ Datos de usuario incorrectos, intente nuevamente.")    
            }
        } while (userName && newPassword)
    }


