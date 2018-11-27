// let e const 

{
    var a = 2 //escopo global ou de função
    let b = 3 //escopo de bloco
}

//Template String 

/*
const produto = 'iPad'
console.log(`${produto} é caro!`)
*/
//Destructuring 

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, , 3]
console.log(x, y)

const { idade: age, nome} = { nome: 'Ana', idade: 9}
console.log(nome, age)
