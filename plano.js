
/* MESA VACIA */

console.log("Por los momentos, el funcionamiento esta bastante sencillo(ponele), abrimos una mesa y tenemos la lista de articulos disponibles a agregar a la derecha, estos se agregan a la mesa y se van sumando el valor total de los articulos agregados.\n\nfunciones pendientes a agregar:\n\n1. Añadir una pestaña de 'Cantidad' a la izquierda del nombre del articulo, que los articulos no se repitan sino que se sumen sin repetirse.\n\n2. Agregar que cada mes funcione por separado, seria un array distinto por mesa.\n\n3. funciones variadas, borrar articulos, agregar nuevos articulos a la lista de articulos disponibles,etc, acá entraria en juego los derechos de la cuenta Admin y personal, la de personal estaria solo limitada a cargar articulos, el admin puede agregar y borrar nuevos articulos a la base de datos, modificar precios, borrar articulos de una mesa, etc.\n\n4. Voy a añadir una ventana nueva con el resumen del total de todas las mesas, que las mesas se puedan dar por 'cobradas' y se sume su valor a la venta diaria, borrando el contenido de la mesa liberandola pero guardando el monto 'cobrado'.\n\nPOR LOS MOMENTOS SOLO SE PUEDE LIMPIAR UNA MESA CON 'localStorage.clear()'")

let tableData = []

/* Guardar TableData con Local Storage */

function saveTable() {
    const json = JSON.stringify(tableData);
    console.log(json); 
    localStorage.setItem('tableData', json);
}

/* Cargar datos dentro del Local Storage al recargar, repitiendo la estructura vista mas abajo para no reescribir el HTML con el contenido del Array TableData[]*/

function loadTableData() {
    const json = localStorage.getItem('tableData');
    if (json) {
        tableData = JSON.parse(json);
        console.log(tableData); 

        for (const data of tableData) {
            const itemsList = document.createElement('li');
            itemsList.textContent = data.item;
            items.appendChild(itemsList);

            const pricePerUnitList = document.createElement('li');
            pricePerUnitList.textContent = `$${data.price}`;
            pricePerUnit.appendChild(pricePerUnitList);

            const priceList = document.createElement('li');
            priceList.textContent = `$${data.price}`;
            totalPrice.appendChild(priceList);

            selectedItems.push(data.item);
            selectedPrices.push(data.price);
            total += data.price;
        }

        tableTotal.textContent = `Total: $${total}`;
    }
}

window.addEventListener('load', loadTableData);



/* Base de datos de articulos en el sistema */

const itemsDB = [
    { id: 1, item: 'Café con leche', price: 450 },
    { id: 2, item: 'Desayuno Clasico con Medialunas o Tostadas', price: 750 },
    { id: 3, item: 'Tostado jamon y queso', price: 900 },
    { id: 4, item: 'Exprimido de Naranja', price: 800 },
    { id: 5, item: 'Almuerzo Ejecutivo', price: 2200 },
    { id: 6, item: 'Agua 500ml', price: 390 },
    { id: 7, item: 'Gaseosa', price: 390 },
];

/* Agregamos los objetos dentro del Array itemsDB dentro del <div> "itemsPanel" en el HTML */

const itemsPanel = document.querySelector('.itemsPanel');
const items = document.querySelector('#items');
const pricePerUnit = document.querySelector('#priceperUnit');
const totalPrice = document.querySelector('#totalPrice');
const tableTotal = document.querySelector('#tableTotal');

let selectedItems = [];
let selectedPrices = [];
let total = 0;

for (const item of itemsDB) {
    const tableItem = document.createElement('div');
        tableItem.classList.add('tableItem');
        tableItem.setAttribute('id', item.id);
        tableItem.innerHTML = `<p>${item.item}</p>`;
        itemsPanel.appendChild(tableItem);

    tableItem.addEventListener('click', function() {
        selectedItems.push(item.item);
        selectedPrices.push(item.price);
        total += item.price;
        const data = {
            item: item.item,
            price: item.price
        };
        tableData.push(data);    

    const itemsList = document.createElement('li');
        itemsList.textContent = `${selectedItems[selectedItems.length - 1]}`;
        items.appendChild(itemsList);

    const pricePerUnitList = document.createElement('li');
        pricePerUnitList.textContent = `$${selectedPrices[selectedPrices.length - 1]}`;
        pricePerUnit.appendChild(pricePerUnitList);

    const priceList = document.createElement('li');
        priceList.textContent = `$${selectedPrices[selectedPrices.length - 1]}`;    
        totalPrice.appendChild(priceList);

    tableTotal.textContent = `Total: $${total}`;

    saveTable();
});
}


/*FUNCION PARA ABRIR MESA */

let btn = document.getElementsByClassName("clientTable")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", openTable);

}
function openTable() {
    console.log("Abriste una mesa, selecciona los articulos a agregar a la derecha");
    let controlPanel = document.getElementsByClassName("controlPanel")[0];
    let itemsPanel = document.getElementsByClassName("itemsPanel")[0];

    if (controlPanel.style.visibility === "visible") {
        controlPanel.style.visibility = "hidden";
        itemsPanel.style.visibility = "hidden";
    } else {
        controlPanel.style.visibility = "visible";
        itemsPanel.style.visibility = "visible";
    }
}