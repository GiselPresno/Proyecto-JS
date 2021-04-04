let nombre = prompt("Ingrese su nombre:")

let palabras = prompt("Indique por favor la cantidad aproximada de palabras a traducir:")

let resultado = calculadora( palabras, 10, "*")

alert("El presupuesto aproximado sería de " + resultado + " pesos.")

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            Break;

        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}


console.log(resultado)