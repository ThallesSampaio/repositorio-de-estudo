var nameH = prompt("What is the name of the oldest person?")
var ageH = Number(prompt("How old are " + nameH + "?"))
var nameL = prompt("Whats is the name of the youngest person?")
var ageL = Number(prompt("How old are " + nameL + "?"))
var difference = ageH - ageL
alert("Name of oldest person: " + nameH + "\nAge: " + ageH +
    "\nName of youngest person: " + nameL + "\nAge: " + ageL +
    "\nThe difference in age is: " + difference
) 