//consoles

console.log('Ola, Mundo!')
console.warn('Isso é um alerta!')
console.error('Isso é um erro')


//variáveis e concatenação

let minhaVariavel = 1
minhaVariavel = 2
console.log(`Essa é minha variável let ${minhaVariavel}`)

const minhaConst = 1
console.log(`A variável const não pode ser alterada ${minhaConst}`)

//Tipos

if ( typeof 212 === "number" ) {
    console.log('É um número')
}else {
    console.log('Não é um número')
}

//Exercicios

//Exercicio 1

let intPositivo = 1
let intNegativo = 2
let numDecimal = 1.01
let texto = "Ola, mundo!"

// Exercicio 2 

let nome = "Gregory"
let sobreNome = "Lima"

console.log(`Meu nome é ${nome} ${sobreNome}`)

// Exercicio 3

//variavel nome ao imprimir esta sendo chamada da maneira incorreta

// Exercicio 4

// variavel sobrenome não foi declarada

// Exercicio 5

let textoNormal = `Ola, meu nome é Gregory Lima.
Eu faço curso na Digital House.
E não estou concatenando com o +, pois acho feio. rsrsrs`
console.log(textoNormal)

// Exercicio 6 idem ao 5

// Exercicio 7 idem ao 6 e 5

// Exercicio 8

let nulo = null
let indefinida = undefined

console.log(nulo, indefinida)

// Exercicio 9

let qualquerNome = "João das Couves"

console.log(qualquerNome)

//Exercicio 10 

const arrFrutas = ['maçã', 'kiwi', 'banana', 'morango', 'uva']
console.log(arrFrutas)

//Exercicio 11

const arrBoolean = [true, false]
console.log(arrBoolean)

//Exercicio 12

let textoDigital = `“Digital House, a escola de programação que forma novas gerações de coders 
e profissionais digitais para imaginar, inovar e criar o que sempre sonharam`

console.log(textoDigital)

// Exercicio 13

let name = 'Gregory'
let lastName = 'Lima'
let space = ' '

console.log(`${name}${space}${lastName}`)


// Exercícios complementares (ainda mais)

// Exercicio 1 (complementar)

let textIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. ‘Excepteur’ sint occaecat cupidatat non proident, sunt in culpa qui
officia deserunt mollit anim id est “laborum”`

console.log(textIpsum)

// Exercicio 2 (complementar)

let data = new Date()
let dia = data.getDay()
let semana = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
             'sexta-feira', 'sábado', 'domingo']

function horasAtual() {
    let hora = data.getHours()
    let minuto = data.getMinutes()
    return  minuto < 10 ? `${hora}:0${minuto}` : `${hora}:${minuto}`
}

let textoData = ` Hoje é ${semana[dia]}.
São: ${horasAtual()}`
console.log(textoData) 


// Exercicio 3 (complementar)

function dataCompleta1() {
    let diaMes = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    return mes < 10 ? `${diaMes}/0${mes}/${ano}` : `${diaMes}/${mes}/${ano}`
}

function dataCompleta2() {
    let diaMes = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    return mes < 10 ? `${diaMes}-0${mes}-${ano}` : `${diaMes}-${mes}-${ano}`
}


console.log(dataCompleta1() +' ou '+ dataCompleta2())

// Exercicio 4 (complementar)

function areaTriangulo(b, h) {
    return (b * h)/ 2
}

console.log(areaTriangulo(5, 6))

// Exercicio 6 (complementar)

function getRandomInt(max) {
    return Math.floor(Math.random() * 10)
}

console.log(getRandomInt(1, 100))

// Exercicio 7, 8, 9 (complementar)

function maiorMenor(n, m){
    return n > m ? 'O maior número é N​' : 'O maior número é M​'
}

console.log(maiorMenor(15, 12))




function palindrome(palavra) {
    const palavraReversa = palavra.split().reverse('')
    return  palavraReversa == palavra ? "É uma palindrome" : "não é uma palindrome"
}

console.log(palindrome("reviver"))

