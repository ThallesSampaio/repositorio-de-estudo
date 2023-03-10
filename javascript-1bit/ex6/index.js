let spaceshipName = prompt('Digite o nome da nave:')

let invertName = ''

for (let pos = spaceshipName.length - 1; pos >= 0; pos--) {
    if (spaceshipName[pos] == 'e') {
        break
    }
    invertName += spaceshipName[pos]
}

alert(`nome originial ${spaceshipName} \nnome ocultado ${invertName}`)
