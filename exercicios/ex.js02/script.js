//Formatando a função em js

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let resp = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')

    }else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = window.document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', '04.png')
            }else if (idade >= 12 && idade < 21) {
                //Jovem
                img.setAttribute('src', '05.png')
            }else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', '05.5.png')
            }else{
                //Idoso
                img.setAttribute('src', '06.png')
            }
        }else if (fsex[1].checked)  {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute(`src`, `01.png`)
            }else if (idade >= 12 && idade < 21) {
                //Jovem
                img.setAttribute('src', '02.png')
            }else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', '02.5.png')
            }else{
                //Idoso
                img.setAttribute('src', '03.png')
            }
        }
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}


    

   


