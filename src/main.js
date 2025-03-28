function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('src', 'foto')

        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '/src/img/bebemenino.png')
            } else if (idade < 21) {
                img.setAttribute('src', '/src/img/homemjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '/src/img/homem.png')
            } else {
                img.setAttribute('src', '/src/img/senhor.png')

            }


        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '/src/img/bebemenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', '/src/img/mulherjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '/src/img/mulher.png')
            } else {
                img.setAttribute('src', '/src/img/senhora.png')

            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
