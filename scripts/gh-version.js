var gh2request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
gh2request.open('GET', 'https://raw.githubusercontent.com/Grick-Heart-Project/Grick-Heart/master/release.json', true)

gh2request.onload = function () {
    var data = JSON.parse(this.response)
    document.getElementById('ghversion-number').innerHTML = data.version;
}

// Send request
gh2request.send()
