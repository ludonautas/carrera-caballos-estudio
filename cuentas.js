"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var ITERACIONES = 1000000;
var esquemas = [
    [0, 0, 2, 3],
    [0, 1, 1, 3],
    [0, 1, 2, 2],
    [1, 1, 1, 2],
];
function calcularGanador(mazo) {
    var posiciones = [0, 0, 0, 0];
    do {
        var carta = Math.random() * mazo.length;
        var palo = mazo.splice(carta, 1)[0];
        posiciones[palo]++;
    } while (posiciones[palo] < 6);
    return palo;
}
esquemas.forEach(function (esquema) {
    var mazo = [];
    esquema.forEach(function (cant, palo) {
        for (var i = cant; i < 10; i++) {
            // @ts-ignore
            mazo.push(palo);
        }
    });
    assert_1.strict.equal(mazo.length, 40 - 5);
    var ganadores = [0, 0, 0, 0];
    for (var i = 0; i < ITERACIONES; i++)
        ganadores[calcularGanador(mazo.slice())]++;
    console.log('ESQUEMA', esquema.join(' '));
    console.log(ganadores.map(function (x) { return Math.floor(x / 1000 + 0.5).toString().replace(/(\d)$/, '.$1'); }).join(' '));
});
