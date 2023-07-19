const N1 = document.querySelector('.number1')
const N2 = document.querySelector('.number2')
const result = document.querySelector('.resultado')

function somar() {
    const Number1 = Number(N1.value)
    const Number2 = Number(N2.value)
    const total =  Number1 + Number2
    result.innerHTML = (`O resultado da soma é ${total}`)
}
function subtrair() {
    const Number1 = Number(N1.value)
    const Number2 = Number(N2.value)
    const total =  Number1 - Number2
    result.innerHTML = (`O resultado da subtração é ${total}`)
}
function multiplicar() {
    const Number1 = Number(N1.value)
    const Number2 = Number(N2.value)
    const total =  Number1 * Number2
    result.innerHTML = (`O resultado é multiplicação ${total}`)
}
function dividir() {
    const Number1 = Number(N1.value)
    const Number2 = Number(N2.value)
    const total =  Number1 / Number2
    result.innerHTML = (`O resultado é divisão ${total}`)
}
function porCento() {
    const Number1 = Number(N1.value)
    const Number2 = Number(N2.value)
    const total =  Number1 % Number2
    result.innerHTML = (`O resultado é ${total}%`)
}
function resetar() {
    const Number1 = Number(N1.value = (''))
    const Number2 = Number(N2.value = (''))
    result.innerHTML = ('')
}


