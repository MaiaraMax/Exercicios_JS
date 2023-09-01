 function somar(num1, num2) {
    return num1 + num2;
}

 function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

 function mult(num1, num2) {
    return num1 * num2;
}

function valor_receber(valor_hr, qtde_horas) {
    return valor_hr * qtde_horas
}

function peso(peso1, peso2, peso3, peso4, peso5) {
    return (peso1 + peso2 + peso3 + peso4 + peso5)/5;
}

module.exports = {somar, sub, div, mult, valor_receber, peso}
