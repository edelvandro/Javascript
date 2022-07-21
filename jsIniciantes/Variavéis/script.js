// Imprimindo o primeiro texto
console.log("Hello Word!");


//Declarando as variáveis
var nome = 'Edelvandro';
var idade = 44;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade)

//Utilizando as variáveis
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//Declarando multiplas variavéis
var sobrenome = 'Fernandes', 
    cidade = 'Mogi Mirim', 
    estado = 'São Paulo';
console.log(sobrenome, cidade, estado);


//Variáveis pode começar com $, _, ou letras
//Não podem começar com numeros ou utilizar palavras reservadas
//Utilizam o padrão cameCase


//Variavél sem definir valores (undefined)
var semDefinir;
console.log(semDefinir);


//Hoisting
var comida;
console.log(comida);
comida = 'Pizza'
console.log(comida);

var time = 'Vasco';
time  = 'flamengo';
console.log(time)
//Não consigo fazer com let nem const

// Declarar uma variavél com seu nome
var nome = 'Edelvandro';
// Declarar uma variavél com sua idade
var idade = 44;
//Declarar uma variavél com sua comida favorita e não atribuir valor
var comidaFavorita;
//Atribuir valor a sua comida favorita
comidaFavorita = 'lazanha' 
//Declarar 5 variavéis diferentes sem valores
var cor, 
carro, 
palavra, 
dia, 
valor; 

console.log(nome, idade, comidaFavorita,cor,carro,palavra,dia,valor);
