/*
Avançando nos Estudos
-variaveis compostas
-Uso de funções e eventos
-passagem de parametros
-exercicios propostos
-proximo passo
conceito de vetores / praticar praticar e praticar
variavel composta é um conjunto de :
array (vetor)= que é o nome da variavel
indice/chave = que é o conjuto de []
elemento = itens que estão dentro da []
valor /conteudo = dados digitados dentro do elemento[]
vetor começa a contagem a partir do [0]
para acrentar valores usamos:
num[7]=1 acrescenta o valor com indicação da posição
num.push() acrescenta o valor com a posição/indice automaticamente
num.sort () coloca os elemente em ordem
num.length = usamos para saber o cumprimento/quantidade de elemento - length é um atributo


*/

let num = [1,3,5] // a variavel guarda mais de 1 elemento
num[9]= 6
num.push(7)

num.sort() 
console.log(num)
console.log(`O vetor tem ${num.length} posições, sendo o ${num}, e o primeiro vetor é ${num[0]}`)//execulta os dados da variavel
console.log(num.length)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)