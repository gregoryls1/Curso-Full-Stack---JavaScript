// Exercicio 1 

// let elevarAoSegundo = (primeiro, segundo) => Math.pow(primeiro, segundo)
// console.log(elevarAoSegundo(2, 4))

//Exercicio 2

// let quadrado = numero => Math.pow(numero, 2)
// console.log(quadrado(5))

// Exercicio 3 

// function atribuicao() {
//     let numero = 5
//    }
// console.log(numero)

// resposta: a variavel numero esta fora do escopo global

// Exercicio 4


// Exercicio 5

// const imprimir = (texto) => console.log(texto)

// let meuSanduiche = (ingrediente1, ingrediente2) => {
//     console.log(`estou comendo sanduíche de: ${ingrediente1} e ${ingrediente2}`)
//     imprimir('Terminei de comer meu Sanduíche')
// }
// meuSanduiche('queijo', 'presunto')

//Arrays
// Exercicio 1

// let numArray = () => {
//     let newArray = []
//     for(let i = 1; i <= 20; i++){
//         newArray.push(i)
//     }
//     return newArray
// }

// let imprimirMultiplos = () => numArray().forEach(element => {
//     if(element % 7 == 0) {
//         console.log(element)
//     }
// });

// imprimirMultiplos()

// Exercicio 2

// let raizElementos = () => {
//     let raizArray = numArray().map(Math.sqrt)
//     return console.log(array)
// }
// raizElementos()

//Objeto literal
// Exercicio 1

// let pessoa = {
//     idade: 29,
//     nome: 'Gregory',
//     sobrenome: 'Lima',
//     sexo: 'masculino',
//     estado_civil: 'solteiro',
//     filmes_preferidos: ['Star Wars', 'Matrix', 'Uma mente brilhante', 'Goonies'],
//     cumprimento() {
//         console.log(`Olá, ${this.nome} ${this.sobrenome}`)
//     },
//     comer(comida) {
//         console.log(`Estou comendo ${comida}`)
//     }
// }


// Exercicio 2

// console.log(pessoa)

// Exercicio 3

// pessoa.idade = 30
// console.log(pessoa)

// Exercicio 4 e 5

// pessoa.cumprimento()

// Exercicio 6 e 7

// pessoa.comer('macarrão')
