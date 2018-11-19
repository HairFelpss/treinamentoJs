const numeros = [1, 2, 3, 4, 5, 6, 7]

let resultado = numeros.map(value => {
    return value * 2
})

console.log(resultado)

const soma10 = soma => soma + 10
const triplo = multi => multi * 3
const paraDinheiro = dolar => `R$ ${parseFloat(dolar).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)