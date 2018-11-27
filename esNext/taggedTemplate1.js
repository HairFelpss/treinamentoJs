// tagged templates - processa o template dentro de uma função

tag = (partes, ...valores) => {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`)