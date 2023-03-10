var departureDateEntry = prompt("Digite a data de partida da nave (formato DD/MM/YYY)")

var departureDate = moment(departureDateEntry, "DD/MM/YYYY")

var today = moment()

var dateDiff = today - departureDate

var chosenOption = prompt("Como você gostaria de exibir o tempo de partida?\n1- Segundos \n2- Minutos \n3- Horas \n4- Dias")

if (chosenOption == "1") {
    var secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de voo: " + secondsOfDeparture + "segundos.")
} else if (chosenOption == "2") {
    var minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de voo: " + minutesOfDeparture + "minutos.")
} else if (chosenOption == "3") {
    var hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de voo: " + hoursOfDeparture + "horas.")
} else if (chosenOption == "4") {
    var daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de voo: " + daysOfDeparture + "dias.")
} else {
    alert("Opção inválida!")
}