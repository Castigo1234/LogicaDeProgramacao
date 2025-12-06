alert ("Boas vindas ao nosso site!");
let nome = 'lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000; 

let mensagemDeErro = "Erro preencha todos os campos!";
alert (mensagemDeErro);
;

idade = prompt ("Qual sua Idade?");
nome = prompt ("Qual seu Nome?");

if (idade >= 18) {
    alert ("Voce pode tirar CNH");
}

else {
    alert ("voce nao pode tirar CNH");
}

