const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*aprovados.forEach((nome, indice, array) =>{
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(aprovado, indice+1)

aprovados.forEach(exibirAprovados)*/

aprovados.splice(4, 0, 'felipe', 'nainy', 'salomao')

aprovados.forEach(ap => {
    console.log(ap) 
})
