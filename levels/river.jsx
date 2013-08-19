#BEGIN_PROPERTIES#
{
    "commandsIntroduced":
        ["map.createNewObject", "player.killedBy", "object.symbol",
         "object.color", "object.onCollision"],
    "music": "Spectrofuzz_Sunset_84"
}
#END_PROPERTIES#
/*
 * river.js
 *
 * Exceptional deeds can be performed in
 * exceptional circumstances.
 */

function startLevel(map) {
    map.placePlayer(map.getWidth()-1, map.getHeight()-1);

    map.createNewObject('water', {
        'symbol': '░',
        'color': '#44f',
        'onCollision': function (player) {
            player.killedBy#{#('drowning in deep dark water')#}#;
        }
    });

    for (var x = 0; x < map.getWidth(); x++)
        for (var y = 5; y < 15; y++)
            map.placeObject(x, y, 'water');

    map.placeObject(0, 0, 'exit');
}
