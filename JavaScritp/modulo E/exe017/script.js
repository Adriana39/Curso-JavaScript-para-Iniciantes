function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0) {
    window.alert('Por Favor digite um numero!')
  }else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while( c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c}=${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}

/* variaveis  uso de condições e repetições
primeira linhas criamos as variaves com id do html
depois usamos o if par condiconar que o usuario deve iserir dados
se não inserir - a tela mostra um alerta
no else criamos as condições quando o usuario digita o dado
convertemos o dado em numero
criamos a variavel que indica o inicio 
usamos o tab.innerHTML com aspas para limpar o quadro
depois usamos o sistema de repetição while com algumas variaveis
e solicitamos que mostre na tela o resultado calculado
com tab.appndchild, e como estamos usando o while
precisamos inserir o encremento c++

*/
