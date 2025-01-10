function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fAno.value.length == 0 || Number (fAno.value) > ano){
        window.alert('[Erro!]verifique os dados digitado e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
  
        if(fsex [0].checked){
            genero='masculino'
        if (idade >=0 && idade < 5){
            //bebe
            img.setAttribute('src','1.png')
        }else if (idade < 10){
            //criança
            img.setAttribute('src','3.png')

        }else if(idade < 17){
            //adolescente
            img.setAttribute('src','5.png')
        }else if (idade < 30){
            //jovem
            img.setAttribute('src','7.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','9.png')
        }else {
            //idoso
            img.setAttribute('src','11.png')
        }               
           
        } else if(fsex[1].checked){
            genero =' feminino'
            if (idade >=0 && idade < 5){
                //bebe
                img.setAttribute('src','2.png')
            }else if (idade < 10){
                //criança
                img.setAttribute('src','4.png')
    
            }else if(idade < 17){
                //adolescente
                img.setAttribute('src','6.png')
            }else if (idade < 30){
                //jovem
                img.setAttribute('src','8.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','10.png')
            }else{
                //idoso
                img.setAttribute('src','12.png')
            }  
        }


        res.style.textAlign ='center'
        res.innerHTML = `Sua idade hoje é ${idade} anos e você é do sexo ${genero}` 
        res.appendChild(img)
    }
}

