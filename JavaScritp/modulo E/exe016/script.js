
function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let int = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
   // window.alert('[Erro!] Falta dados')
    res.innerHTML='Impossivel contar!'
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(int.value)

    if (p <= 0){
      window.alert('Intervalo Invalido!Considerando o intervalo de 1 em 1')
      p = 1
    }

    //contagem crescente
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{27A1}`
      }
    
// contagem decrescente
    }else{
      for (let c = i; c >=f; c-= p ){
        res.innerHTML += `${c} \u{2B05}`
      }
      
    }
     res.innerHTML += `\u{1F3AF}`
  }
}