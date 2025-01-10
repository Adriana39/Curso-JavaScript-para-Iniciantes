
/*
uma forma de fazer:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

forma padrão de fazer
console.log(valores)
//forma ideal de fazer
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

num.indexOf() = retorna o valor que existe dentro do vetor // ? caso não encontre ele retorna um valor (-)
*/


//forma simplificada de execultar o codigo
let valores=[6,2,8,4]
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}