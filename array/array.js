let aprovados = ['Bia', 'Carlos', 'Ana']
/*console.log(aprovados)

aprovados[3] = 'Paulo'
aprovados.push('Leo') // adiciona elemento no ultimo indice do array
console.log(aprovados)

aprovados.sort() // retorna array original em ordem alfabetica
console.log(aprovados)

delete aprovados[1] // atribui undefined no indice escolhido, excluindo o value mas não o indice do array
console.log(aprovados)
*/

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(3, 1,'Index1', 'Index2') //splice adiciona ou remove elementos (X, Y) X= a partir de X indice, Y adicione ou exclua dependnedo do que voce fizer
console.log(aprovados)