const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo indice, o contrário do push
console.log(pilotos)
/*
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primero indice
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o indice como primeiro
console.log(pilotos)

//splice adiciona e remove elementos 
//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //remove o indice 3
console.log(pilotos)*/

const algunsPilotos1 = pilotos.slice(2) // novo array pegando os elementos do anterior
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pega os elementos de 1 até antes do 4
console.log(algunsPilotos2)
