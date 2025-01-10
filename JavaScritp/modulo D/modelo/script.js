
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minuto}minutos.` 


if(hora >= 0 && hora <= 12){
    //Bom dia!
    img.src = 'assets/manha.png'
    document.body.style.background ='#788ff0'
}else if (hora >+ 12 && hora <= 18){
//Boa tarde!
img.src = 'assets/tarde.png'
 document.body.style.background = '#f47a4f'
}else{
   // Boa Noite!
   img.src = 'assets/noite.png'
  document.body.style.background= '#212d39'
}

}

