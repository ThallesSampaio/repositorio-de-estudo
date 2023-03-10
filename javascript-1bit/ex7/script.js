var dobras = 0
var option = ""

var spaceship = prompt("Qual nome da nave?")

option = prompt("entrar na dobra? \n1-SIM \n2-NAO")

while (option == "1") {
    dobras += 1
    option = prompt("entrar na proxima dobra? \n1-SIM \n2-NAO")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + dobras)