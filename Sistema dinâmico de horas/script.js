function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas!</p>`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/imagem01.png' 
        document.body.style.background = '#F2B035'
        msg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'imagens/imagem03.png'
        document.body.style.background = '#F25C05'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        //Boa noite!
        img.src = 'imagens/imagem02.png'
        document.body.style.background = '#033F73'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}