"use strict";
//string
var nome = 'João'; //defini o tipo dela
console.log('String: ' + nome);
//numbers - não diferencia números inteiros e números decimais
var idade = 27;
console.log('Number: ' + idade);
//boolean
var possuiHobbies = false;
console.log('Booleano: ' + possuiHobbies);
//tipos explícitos
var minhaIdade; //não declarou a variável com um tipo explícito
/*
No typescript uma variável sem ter um tipo explícito é "any"
let minhaIdade = any (está formanlisando que ela não terá um tipo específico)
*/
minhaIdade = 27; //então tem um tipo dinâmico
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
