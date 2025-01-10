/* Repetições com teste logico no inicio
comando: while(teste logico){execultar} 
 Repetições com execução do bloco e depois faz o teste
 comando: do{execultar} while(teste logico))

console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
console.log('Passo 4')
console.log('Passo 5')
console.log('Passo 6')


var c = 1
while( c <= 10) {
    console.log(`Passo ${c}`)
    c++
}
    */

var c = 1
 do{
    console.log(`Passo ${c}`)
    c++
}while( c <= 5)