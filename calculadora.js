function fncalcular() {
    let numero1 =parseInt(document.getElementById("txtnumero1").value); 
    let numero2 = parseInt(document.getElementById("txtnumero2").value); 
    let operacion = document.getElementById("operacion").value; 

    try {
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Ingresa valor valido");
        }
        if (!operacion) {
            throw new Error("selecciona una operacion");
        }

        let resultadofinal;

        switch (operacion) {
            case "suma":
                resultadofinal = fnsuma(numero1, numero2);
                break;

            case "resta":
                resultadofinal = fnresta(numero1, numero2);
                break;

            case "multiplicacion":
                resultadofinal = fnmultiplicacion(numero1, numero2);
                break;

                case "parOImpar":
                resultadofinal = fnParOImpar(numero1, numero2);
                break;


            default:
                throw new Error("operacion no valida");
        
        }

    }
     catch (error) {
        document.getElementById("resultado").classList.add("error");
        document.getElementById("resultado").textContent = error.message;
    } finally {
        console.log("terminamos");
    }

function fnsuma(numero1,numero2) {
    let suma =(numero1 + numero2);
    console.log(` el resultado de la suma es: ${suma}`);
    document.getElementById("resultado").innerHTML = (el resultado de la suma es:${suma});
    return suma;
}
function fnresta(numero1, numero2) {
    let resta = (numero1 - numero2);
        console.log(el resultado de la resta es: ${resta});
        document.getElementById("resultado").innerHTML = (el resultado de la resta es: ${resta});
    
    return resta;
    }

function fnmultiplicacion(numero1,numero2) {
    let multiplicacion = (numero1 * numero2);
    console.log(el resultado de la multiplicacion es: ${multiplicacion});
    document.getElementById("resultado").innerHTML = (el resultado de la multiplicacion es: ${multiplicacion});
    return multiplicacion;
}

function fnParOImpar(numero1, numero2) {
    let resultado = " ";
    if ((numero1 % 2 === 0) && (numero2 % 2 === 0)) {

        if (resultado === "Ambos números son pares") {
            console.log(`es par `);
            document.getElementById(es par).innerHTML = resultado;
        }
    } else if ((numero1 % 2 !== 0) && (numero2 % 2 !== 0)) {

        if (resultado === "Ambos números son impares") {
            console.log(`es impar `);
            document.getElementById(es impar).innerHTML = resultado;

            return parOimpar;
        }
    }

}
}
