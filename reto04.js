// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

const d = decode('((nta)(sa))')
console.log(d) // "santa"



function decode(message) {
    // comprobar si existe un ( 
    let open1 = message.indexOf("(");
    // console.log(open1);

    // si existe, buscar el siguiente (
    let open2 = message.indexOf("(", open1 + 1);
    // console.log(open2);

    // si no existe segundo (, buscar el siguiente )
    if (open2 === -1) {
        let closed1 = message.indexOf(")", open1 + 1);
        // console.log(closed1);

        // invertir cadena entre ( y )
        let contenido = message.substring(open1 + 1, closed1);
        let contenidoRevertido = contenido.split("").reverse().join("");
        let cadenaModificada = message.substring(0, open1 + 1) + contenidoRevertido + message.substring(closed1);
        let cadenaSinParentesis = cadenaModificada.replace(/[()]/g, "");
        return (cadenaSinParentesis);
    } else {
        let closed1a = message.indexOf(")", open1 + 1);

        if (open2 < closed1a) {
            console.log('hay 2 parentesis abiertos antes de cerrar el primero');
            // encuentra cuantos strin entre () existen y los revierte
            let closed2a = message.indexOf(")", closed1a + 1);
            console.log('closed2a', closed2a);





            // revierte el strin entre () interior
            let contenido1 = message.substring(open2 + 1, closed1a);
            let contenidoRevertido1 = contenido1.split("").reverse().join("");
            console.log('revert1', contenidoRevertido1);

            let closed2a = message.indexOf(")", closed1a + 1);
            let interior1 = message.substring(open1 + 1, open2);
            let interior2 = message.substring(closed1a + 1, closed2a);
            let interior = interior1 + contenidoRevertido1 + interior2;
            console.log('interior', interior);
            // quita () a interior  
            let interiorSinParentesis = interior.replace(/[()]/g, "");
            console.log('interiorSinParentesis', interiorSinParentesis);
            // revierte interiorSinParentesis
            let interiorRevertido = interiorSinParentesis.split("").reverse().join("");
            console.log('interiorRevertido', interiorRevertido);

            let exterior1 = message.substring(0, open1);
            let exterior2 = message.substring(closed2a + 1);
            let exterior = exterior1 + interiorRevertido + exterior2;
            console.log('exterior', exterior);
            return exterior;

        } else {
            let closed1 = message.indexOf(")", open1 + 1);
            // console.log(closed1);
            // invertir cadena entre ( y )
            let contenido1 = message.substring(open1 + 1, closed1);
            let contenidoRevertido1 = contenido1.split("").reverse().join("");
            // console.log(contenidoRevertido1);
            // let cadenaModificada1 = message.substring(0, open1 + 1) + contenidoRevertido1 + message.substring(closed1);
            // let cadenaSinParentesis1 = cadenaModificada1.replace(/[()]/g, "");
            // console.log('1er paso', cadenaSinParentesis1);

            // busca closed2
            let closed2 = message.indexOf(")", open2 + 1);
            // console.log(closed2);

            // invertir cadena entre ( y )
            let contenido2 = message.substring(open2 + 1, closed2);
            let contenidoRevertido2 = contenido2.split("").reverse().join("");
            // console.log(contenidoRevertido2);
            // let cadenaModificada2 = message.substring(0, open2 + 1) + contenidoRevertido2 + message.substring(closed2);
            // let cadenaSinParentesis2 = cadenaModificada2.replace(/[()]/g, "");
            // console.log('2º paso', cadenaSinParentesis2);

            console.log('1er paso', contenidoRevertido1 + ' ' + contenidoRevertido2);
            return (contenidoRevertido1 + ' ' + contenidoRevertido2);
        }
    }
}

// return ''


