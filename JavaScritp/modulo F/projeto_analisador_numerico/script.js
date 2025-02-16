/* Controles basicos */
let num = document.querySelector('input#fnum') //numero
let lista = document.querySelector('select#flista') // lista
let res = document.querySelector('div#res') // resultado
/*array vetor - serve para analisar dados*/
let valores = []

/* chamando o evento */
function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100){
    return true // se for verdadeiro
  } else{
    return false //   se for falso
  }

}

function inLista(n, l) {
  if(l.indexOf(Number(n)) != -1){
    return true // se for verdadeiro

  } else {
     return false //  se for falso
  }

}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value)) // adicionar o valor no array
     let item = document.createElement('option') // criar um item
     item.text = `Valor ${num.value} adicionado.` //  texto do item
     lista.appendChild(item) // adicionar o item na lista
     res.innerHTML = '' // limpar o resultado
  
    

  } else{
    window.alert('Valor invalido ou já encontra-se na lista!') // mensagem de erro
  }

  num.value = '' // limpar o campo
  num.focus()   // focar no campo

}

function finalizar(){

  if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar!') // mensagem de erro
  } else{ 
    let tot = valores.length // total de elementos
    let maior = valores[0] // maior valor
    let menor = valores[0] // menor valor
    let soma = 0 // soma dos valores
    let media = 0 // media dos valores

    for(let pos in valores){
      soma += valores[pos] // soma dos valores

      if(valores[pos] > maior) // maior valor
        maior = valores[pos]

      if(valores[pos] < menor) // menor valor
        menor = valores[pos]
    }

    media = soma / tot // media dos valores

    res.innerHTML = '' // limpar o resultado
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` // total de elementos
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` // maior valor
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` // menor valor
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` // soma dos valores
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` // media dos valores

  }
}