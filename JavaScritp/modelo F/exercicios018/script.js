/* Controles basicos */
let num = document.querySelector('input#fnum') //numero
let lista = document.querySelector('select#flista') // lista
let res = document.querySelector('div#res') // resultado
/*array vetor - serve para analisar dados*/let valores = []

/* chamando o evento */
function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else{
    return false
  }

}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true

  } else {
     return false
  }

}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value)){

  } else{
    window.alert('Valor invalido ou já encontra-se na lista!')
  }

}