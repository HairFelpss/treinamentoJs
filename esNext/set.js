const times =new Set()
times.add('Vasco').add('Flamerda').add('Botafogo').add('Atletico').add('Cruzeiro').add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Nainy', 'Felipe', 'Pedro', 'Paulo',]
const nomesSet = new Set(nomes)

console.log(nomesSet)