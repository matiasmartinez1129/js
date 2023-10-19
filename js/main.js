

const ARNES_MORA = 3500;
const ARNES_CIELO = 4000
const ARNES_EMMA = 3800
const ARNES_FUEGO = 6000
let dinero_del_usuario = 4000;
let tarjeta_de_credito = 5000
let opcion_de_pago;
let PRODUCTOS;

function productos() {
    do {
       return PRODUCTOS = prompt("Elije el arnes que mas vaya con vos: 1.Arnes Mora -- 2.Arnes Cielo -- 3.Arnes Emma -- 4.Arnes Fuego")
    } while (PRODUCTOS !== "1" && PRODUCTOS !== "2" && PRODUCTOS !== "3" && PRODUCTOS !=="4");
}

function opcionDePago () {
    do {
       return opcion_de_pago = prompt(" Elija la opcion de pago: Opcion 1: Transferencia --- Opcion 2: Tarjeta de credito")
    } while (opcion_de_pago !== "1" && opcion_de_pago !== "2");
}
productos()
opcionDePago()


let precio_arnes;

switch (PRODUCTOS) {
    case "1":
        precio_arnes = ARNES_MORA;
        break;
    case "2":
        precio_arnes = ARNES_CIELO;
        break;
    case "3":
        precio_arnes = ARNES_EMMA;
        break;
    case "4":
        precio_arnes = ARNES_FUEGO;
        break;
}

if (opcion_de_pago === "1") {
    if (dinero_del_usuario >= precio_arnes) {
        console.log("El pago se realizó con éxito");
    } else {
        console.log("Saldo insuficiente para realizar el pago");
    }
} else if (opcion_de_pago === "2") {
    if (tarjeta_de_credito >= precio_arnes) {
        console.log("El pago se realizó con éxito");
    } else {
        console.log("Saldo insuficiente para realizar el pago");
    }
} else {
    console.log("Opción de pago no válida");
}