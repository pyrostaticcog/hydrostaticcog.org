let request = new XMLHttpRequest()

request.open('GET', 'https://hydrostaticcog.org/alert.json', true)

request.onload = function() {
    var alertFile = JSON.parse(this.response)
    console.log(alertFile.onAlert)
    if (alertFile.onAlert) {
        document.getElementById('alerts').innerHTML = 'WE ARE CURRENTLY EXPERIENCING SOME OUTAGES. SOME SERVICES MAY BE AFFECTED'
        var alertBox = document.querySelector('.alert')
        alertBox.style.padding = '5px';
        alertBox.style.backgroundColor = 'rgb(255, 0, 0)';
        alertBox.style.color = 'white';
        alertBox.style.marginBottom = '10px';
        var alertLink = document.createElement('a');
        var linkText = document.createTextNode('Status Page');
        alertLink.appendChild(linkText)
        alertLink.title = 'Status Page';
        alertLink.href = 'https://status.hydrostaticcog.org/outages/' + alertFile['alertID'];
        document.getElementById('alertButton').appendChild(alertLink)
        document.getElementById('alert1').style.display = 'block';
    } else {
        return
    }

}

request.send()