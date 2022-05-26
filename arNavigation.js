var coords = {} 

$(document).ready(function(){
    getCoords()
})

function getCoords(){
    let params = new URLSearchParams(window.location.search)
    console.log(params)
    if(params.has("source")&& params.has("destination")){
        let source = params.get("source")
        let destination = params.get("destination")
        coords.srcLat = source.split(";")[0]
        coords.srcLng = source.split(";")[1]

        coords.destLat = destination.split(";")[0]
        coords.destLng = destination.split(";")[1]
    }
    else{
        alert("COORDINATES NOT SELECTED")
        window.history.back()
    }
}