const app = document.getElementById('project-2')
const container = document.createElement('div')
container.setAttribute('class', 'container')

var mcrequest = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
mcrequest.open('GET', 'https://api.mcsrvstat.us/2/vegasmp.hydrostaticcog.org', true)

mcrequest.onload = function () {
    var data = JSON.parse(this.response)
    if (data.online) {
        if (!data.players.list) {
            var playerList = 'No Players Online'
        } else {
            var playerList = data.players.list
        }
        document.getElementById("status-playerList").innerHTML = 'Players: ' + playerList;
        document.getElementById("status-isOnline").innerHTML = 'Server Online';
        document.getElementById("status-playerCount").innerHTML = data.players.online +'/'+ data.players.max;

    }
    else {
        document.getElementById("status-isOnline").innerHTML = 'Server Offline'
    }
}

// Send request
mcrequest.send()