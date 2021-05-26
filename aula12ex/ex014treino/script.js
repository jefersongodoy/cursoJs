function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        img.src ='image/fotomanha.png'
    } else if (hora >=12 && hora < 18) {
        img.src='image/fototarde.png'
    } else {
        img.src='image/fotonoite.png'
    }
}
