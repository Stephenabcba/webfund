function loadCity() {
    alert("Loading weather report...")
}

function chooseUnits(element) {
    temperatureList = document.querySelectorAll(".temperature")
    if (element.value == "Celcius") {
        console.log("C")
        for (var i = 0; i < temperatureList.length; i++) {
            tempF = parseInt(temperatureList[i].innerText)
            temperatureList[i].innerText = Math.round((tempF - 32) * 5 / 9)
        }
    }
    else if (element.value == "Fahrenheit") {
        console.log("F")
        for (var i = 0; i < temperatureList.length; i++) {
            tempC = parseInt(temperatureList[i].innerText)
            temperatureList[i].innerText = Math.round(tempC * 9 / 5 + 32)
        }
    }
}

function acceptCookies() {
    cookiesWindow = document.querySelector("#cookie-notice")
    cookiesWindow.remove()
}