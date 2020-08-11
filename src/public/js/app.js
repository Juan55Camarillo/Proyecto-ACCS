// Nuestro código irá aquí

var arregloPines = [];

//agregar pines
function agregarMarcador(location) {
    var pin = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });

    for (var i in arregloPines) {
        arregloPines[i].setMap(null);
    }

    arregloPines.push(pin);
}

function cargar_mapa() {
    var myOptions = {
        zoom: 14.33,
        center: new google.maps.LatLng(21.155226, -100.930513),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions)

    //Agregar listener clic
    map.addListener('click', function (event) {
        agregarMarcador(event.LatLng);
    })


    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(21.1567508, -100.9426061),
        map: map,
        tittle: "Prueba"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(21.157907, -100.931314),
        map: map,
        tittle: "Prueba-2"
    });
    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(21.165191, -100.934801),
        map: map,
        tittle: "Prueba-3"
    });
    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(21.149207, -100.956623),
        map: map,
        tittle: "Prueba-4"
    });
    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(21.160478, -100.907984),
        map: map,
        tittle: "Prueba-5"
    });

    arregloPines.push(pin);
}