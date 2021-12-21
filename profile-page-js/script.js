console.log("Hello World")

function changeName() {
    var name = document.querySelector("#profile-name")
    name.innerText = "Jenny Dough"
}

function requestAnswered(connectionId,accepted) {
    var connect = document.querySelector("#"+connectionId)
    var requestCount = document.querySelector("#request-count")
    var yourConnectCount = document.querySelector("#your-connect-count")
    requestCount.innerText = parseInt(requestCount.innerText) - 1
    if (accepted) {
        yourConnectCount.innerText = parseInt(yourConnectCount.innerText) + 1
    }
    connect.remove()
}