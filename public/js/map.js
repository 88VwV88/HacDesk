'use strict;'

var map;
var places = null;

async function GetMap() {
    await fetch('js/places.json')
        .then(response => response.json())
        .then(json => places = json)
        .catch(err => {
            console.log('Failed to fetch places!');
            console.error(err);
        });

    map = new Microsoft.Maps.Map('#myMap', {
        credentials: places.key,
        center: new Microsoft.Maps.Location(...places.origin),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 17
    });


    for (var location of places.locations) {
        var center = new Microsoft.Maps.Location(
            ...location.center
        );
        var pin = new Microsoft.Maps.Pushpin(
            center, location.info
        );
        console.log(pin);
        map.entities.push(pin);
    }
}