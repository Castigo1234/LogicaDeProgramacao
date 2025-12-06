alert ("Boas Vindas ao nosso Jogo do Numero Secreto!")
let numeroSecreto = 5;
console.log (numeroSecreto);
let chute = prompt ("Digite um numero entre 0 e 10:");

// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert (`Voce acertou! Parabens! ${numeroSecreto}` );
} 
else {
    alert ("Errrouuu!")
}
