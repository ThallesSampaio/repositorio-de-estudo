var name = prompt("Whats your name?")
var velocity1 = 0
var velocity2 = prompt("Em qual velocidade vc gostaria de acelerar a nave?")
var confirm = confirm("Vc escolheu a velocidade: " + velocity2 + "km/s")
if (confirm) {
    velocity1 = velocity2
}

//-----------------------------------------------------------------------------------------------

/*Versão 1 do código: 
if (velocity1 < 0) {
    alert("Nave está parada!")
} else {
    if (velocity1 > 0 && velocity1 < 40) {
        alert("Voce esta devagar demais podemos aumentar a velocidade!")
    } else {
        if (velocity1 < 80) {
            alert("parece uma boa velocidade para manter")
        } else {
            if (velocity1 < 100) {
                alert("Velocidade alta, considere diminuir")
            } else {
                if (velocity1 >= 100) {
                    alert("velocidade perigosa, controle automático ativado")
                }
            }
        }
    }
}
*/
// abaixo a versão 2 aprimorada, mais legível feita com ajuda da resolução do exercício
if (velocity1 <= 0) {
    alert("Nave está parada!")
} else if (velocity1 < 40) {
    alert("Voce está devagar, podemos aumentar")
} else if (velocity1 < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity1 < 100) {
    alert("Velocidade alta, considere diminuir!")
} else {
    alert("Velocidade perigosa, controle automático ativado!")
}

//-----------------------------------------------------------------------------------------------

alert("Nome do piloto: " + name + "\nVelocidade atual: " + velocity1 + "km/s")