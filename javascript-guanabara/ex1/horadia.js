function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'https://images.pexels.com/photos/3337209/pexels-photo-3337209.jpeg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        document.body.style.background = '#515154'
    }
}