alert("Bienvenidos a Boxes")


motor();

function motor() {
    let elegirMotor;
    do {
        elegirMotor = prompt("Elija el tipo de motor: \n 1-Motor Nafta\n 2-Motor Diesel\n 3-Motor Hibrido");
        switch (elegirMotor) {
            case "1":
                alert("has elegido motor Nafta");
                modeloAuto(motor);
                motor = "nafta";
                break;

            case "2":
                alert("has elegido motor Diesel");
                modeloAuto(motor);
                motor = "diesel";
                break;

            case "3":
                alert("has elegido motor Hibrido");
                modeloAuto(motor);
                motor = "hibrido";
                break;

            /*   default:
                  alert("No es una opcion correcta") */

        }


    }
    while (elegirMotor == !4);
}
function modeloAuto(motor) {
    let elegirModelo;
    let modelo = elegirModelo;
    do {
        elegirModelo = prompt("\n 1- 1990 a 2000 \n2- 2000 a 2010 \n3- 2010 a 2020 \n 4- 2020 a 2030")
        switch (elegirModelo) {
            case "1":
                alert("has elejido opcion 1");
                alert("te recomendamos aceite mineral");
                /*   modelo = 1;
                  tipoAceite(modelo, motor,) */
                break;

            case "2":
                alert("has elejido opcion 2");
                alert("te recomendamos aceite semisintetico");
                break;

            case "3":
                alert("has elejido opcion 3")
                alert("te recomendamos aceite sintetico");
                break;
            case "4":
                alert("has elejido opcion 4")
                alert("te recomendamos aceite sintetico");
                break;
            default:
                alert("No es una opcion correcta")
        }
    } while (modeloAuto == !5)
}

//El proyecto que realice en desarrolo web fue de uñas, la idea es hacer una tienda en la misma pagina y ademas un apartado para poder sacar turnos online. 
//Esto de services de autos es a lo que me dedico actualmente y hice esto para poder hacer la preentrega y cuando avance mas en el curso relizar lo que quiero
