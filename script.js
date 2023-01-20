let mes;
let dia;
let anio;

//funcion obtener valor
///////////////////////////
function obtenerVal(valor) {
    let obt;

    obt = document.getElementById(valor).value;
    console.log(obt.length)
    if (obt == NaN || obt.length == 0) {
        console.log("Entro");
        return "FechaInvalida";
    }
    else {
        console.log(obt);
        return obt;
    }



}

//funcion concatenar
/////////////////////////////////
function concatenar(dia, mes, anio) {
    return `${mes}/${dia}/${anio}`;
}

function cambiarTexto(cadena) {

    let docu = document.getElementById("div-resultado");
    // console.log(docu);
    docu.innerHTML = cadena;
}

//funcion validar dia
/////////////////////////////
function validarDia(nombreDia) {
    let cadena;
    switch (nombreDia) {
        case 1:


            cadena = "Lunes, Laborable";
            break;
        case 2:

            cadena = "Martes, Laborable";
            break;
        case 3:

            cadena = "Miercoles, Laborable";
            break;
        case 4:

            cadena = "Jueves, Laborable";
            break;
        case 5:

            cadena = "Viernes, Laborable";
            break;
        case 6:

            cadena = "Sabado, No Laborable";
            break;
        case 0:
            cadena = "Domingo, No Laborable";
            break;
    }

    //console.log(cadena);
    cambiarTexto(cadena);
}

///////////////////////////////////////////////////////

let boton = document.getElementById("boton");

boton.onclick = () => {


    mes = obtenerVal("mes");
    //console.log("mes"+mes);
    dia = obtenerVal("dia");
    //console.log("dia"+dia);
    anio = obtenerVal("anio");
    //console.log("anio"+anio);
    if (mes == "FechaInvalida" || dia == "FechaInvalida" || anio == "FechaInvalida") {
        return alert("Ingrese por favor una fecha correcta");

    }
    else {
        console.log("Ya son numero a hora validamos que sean correctos");
        if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || anio > 3000 || anio < 100) {
            return alert("Ingrese por favor una fecha correcta");
        }

        else {
            if (mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11) {
                if (mes == 2) {
                    if (mes == 2 && dia > 28 && !((0 == anio % 4) && (0 != anio % 100) || (0 == anio % 400))) {
                        return alert("Ingrese por favor una fecha correcta");

                    }
                    else if (mes == 2 && dia > 29 && ((0 == anio % 4) && (0 != anio % 100) || (0 == anio % 400))) {
                        return alert("Ingrese por favor una fecha correcta");
                    }
                }
                else {
                    if (dia > 30) {
                        return alert("Ingrese por favor una fecha correcta");

                    }

                }



            }
            console.log("Seguimos a obtener el dia")
            let fechaConcatenada
            let nombreDia;
            //mes/dia/año mes-dia-año

            fechaConcatenada = new Date(concatenar(dia, mes, anio));
            nombreDia = fechaConcatenada.getDay();
            console.log(fechaConcatenada);
            validarDia(nombreDia);



        }
    }

}