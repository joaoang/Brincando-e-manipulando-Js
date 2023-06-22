function executar() {
    var numero1 = document.getElementById ('primeironumero')
    var numero2 = document.getElementById ('segundonumero')
    var number1 = Number(numero1.value)
    var number2 = Number(numero2.value)
    var total = number1 + number2
    document.getElementById ('visorresultado').innerHTML = (`O total de ${number1} mais ${number2} é ${total}`)
}