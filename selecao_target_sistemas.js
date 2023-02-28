/* Questão 1 - Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA? */

function questao1() {
  indice = 13;
  soma = 0;
  k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  console.log(soma);
}

questao1();

/* Questão 2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

// Definindo o número a ser verificado
const numeroVerificar = 21;

let a = 0;
let b = 1;
let c;

while (b < numeroVerificar) {
  c = a + b;
  a = b;
  b = c;
}

if (b === numeroVerificar) {
  console.log(`${numeroVerificar} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numeroVerificar} não pertence à sequência de Fibonacci`);
}

/* Questão 3 -Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal (Não recebi esses arquivos por e-mail!);
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

const faturamentoDiario = [500, 200, 300, 700, 800, 900, 1200, 10];
let menorValor = faturamentoDiario[0];
let maiorValor = faturamentoDiario[0];
let somaTotal = 0;

for (let i = 1; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menorValor) {
    menorValor = faturamentoDiario[i];
  }
  if (faturamentoDiario[i] > maiorValor) {
    maiorValor = faturamentoDiario[i];
  }
  somaTotal = somaTotal + faturamentoDiario[i];
}
let media = somaTotal / faturamentoDiario.length;

let maiorQueMedia = 0;

for (let i = 1; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > media) {
    maiorQueMedia++;
  }
}

console.log("O menor valor é:", menorValor);
console.log("O maior valor é:", maiorValor);
console.log("O valor médio é:", media);
console.log("O valor médio é:", maiorQueMedia);

// Menor valor é: 10
// Maior valor é: 1200
// O valor médio é: 513.75
// O valor foi acima da média em: 4 dias

/* Questão 4 - Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let total = sp + rj + mg + es + outros;

sp = (sp * 100) / total;
rj = (rj * 100) / total;
mg = (mg * 100) / total;
es = (es * 100) / total;
outros = (outros * 100) / total;

console.log(sp);
console.log(rj);
console.log(mg);
console.log(es);
console.log(outros);

/* Questão 5 - Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

let palavra = "Essa vaga já é minha!";
let letras = palavra.split("");

let reverse = [];

for (let i = letras.length; i >= 0; i--) {
  reverse.push(letras[i]);
}

reverse = reverse.join("");
console.log(reverse);
