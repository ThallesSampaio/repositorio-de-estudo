var distanceLY = Number(prompt("Informe a distancia em anos luz"))

var unityChoose = prompt("Escolha a unidade de medida: Lista de opções: \n1- Parsec(pc) \n2- Unidade astronômica(AU) \n3- Quilômetros(Km)")
var nameUnity
var convertedValor

switch (unityChoose) {
    case "1":
        nameUnity = "Parsec"
        convertedValor = distanceLY * 0.306601
        break
    case "2":
        nameUnity = "Unidade astronômica"
        convertedValor = distanceLY * 63241.1
        break
    case "3":
        nameUnity = "Quilômetros"
        convertedValor = distanceLY * 9.5 * Math.pow(10,12)
        console.log(convertedValor)
        break
        default:
            nameUnity = "Unidade não identificada"
            convertedValor = "Conversão fora do escopo"
}

    alert("Distância em anos-luz: " + distanceLY + "\nUnidade escolhida: " + nameUnity + "\nConversão desejada: " + convertedValor)
