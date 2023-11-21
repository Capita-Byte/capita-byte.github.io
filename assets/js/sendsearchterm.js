function sendSearchTerm(term) {
    // create event payload
    var eventPayload = JSON.stringify({
        "eventName": "user_search",
        "searchTerm": term,
        "timestamp": Date.now()
    })
    // set request headers and send
    var xhttp = new XMLHttpRequest()
    xhttp.open("POST", "");
    xhttp.send(eventPayload)
}
