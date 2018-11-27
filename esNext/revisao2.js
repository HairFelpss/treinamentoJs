//Arrow function

const soma = (a, b) => a + b
console.log(soma(1, 2))

//Arrow Function 

const lexico1 = () => console.log(this === module.exports || exports)
lexico1()

//parametro default
defaultParam = (texto = 'Node') => {
    console.log(texto)
}
defaultParam()
defaultParam('Vasco')

//Operador rest
total = (...numeros) => {
    let total = 0
    numeros.forEach(num => total += num)
    return total
}
console.log(total(2, 3, 4, 5)) //Os numeros passandos se tornam um único array para a function