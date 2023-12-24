
alert("a soma de dois números é")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")



alert(Number(numberOne) + Number(numberTwo)) 

let soma = (Number(numberOne) + Number(numberTwo)) 
let result = soma

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

/* espaço */

alert("a subtração de dois números é: ")
alert(Number(numberOne) - Number(numberTwo))

/* espaço */

alert("a multiplicação de dois números é: ")
alert(Number(numberOne) * Number(numberTwo))

/* espaço */

alert("a divisão de dois números é: ")
alert(Number(numberOne) / Number(numberTwo))

/* espaço */

alert("o resto da divisão de dois números é: ")
alert(Number(numberOne) % Number(numberTwo))

/* espaço */

/* alert("se o resultado da soma é par") */

const sum = numberOne + numberTwo

if (sum % 2 === 0) {
    
    alert("A soma dos números é : par " );
}

else  {

    alert ("A soma dos números é : impar ");
}

/* break */

if (numberOne === numberTwo) {
    
    alert("Os numeros inseridos são iguais.")
}

else  {
    
    alert("Os números inseridos são diferentes.")
}