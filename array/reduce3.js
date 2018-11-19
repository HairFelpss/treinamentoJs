Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let valorAnterior = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        valorAnterior = callback(valorAnterior, this[i], i, this)
    }
    return valorAnterior
}

const soma = (total, valor) => total + valor

const numeros = [1, 2, 3, 4, 5, 6]

console.log(numeros.reduce2(soma, 10))