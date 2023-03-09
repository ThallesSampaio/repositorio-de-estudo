function contar() {
    var start = document.getElementById('txtS')
    var end = document.getElementById('txtE')
    var pace = document.getElementById('txtP')
    var res = document.getElementById('res')


    if (start.value.length == 0 || end.value.length == 0 || pace.value.length == 0) {
        alert('[ERRO] Falta os dados')
    } else {
        res.innerHTML = 'Contando: '
        var s = Number(start.value)
        var e = Number(end.value)
        var p = Number(pace.value)
        if (p <= 0) {
            alert('PASSO 0, PASSO SERA CONSIDERADO 1!')
            p = 1
        }
        if (s < e) {
            for (var c = s; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }  else {
            for (var c = s; c >= e; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}