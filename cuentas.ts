import {strict as assert} from "assert";

const ITERACIONES = 1000000;

let esquemas = [
    [0,0,2,3],
    [0,1,1,3],
    [0,1,2,2],
    [1,1,1,2],
];

type Palos = 0|1|2|3;

function calcularGanador(mazo:Palos[]){
    var posiciones = [0,0,0,0];
    do{
        let carta = Math.random()*mazo.length;
        var palo = mazo.splice(carta, 1)[0];
        posiciones[palo]++;
    }while(posiciones[palo]<6);
    return palo;
}

esquemas.forEach(esquema=>{
    let mazo:Palos[] = []
    esquema.forEach((cant, palo)=>{
        for(let i=cant; i<10; i++){
            // @ts-ignore
            mazo.push(palo);
        }
    })
    assert.equal(mazo.length, 40-5);
    let ganadores = [0,0,0,0];
    for(let i=0; i<ITERACIONES; i++) ganadores[calcularGanador(mazo.slice())]++;
    console.log('ESQUEMA', esquema.join(' '));
    console.log(ganadores.map(x=>Math.floor(x/1000+0.5).toString().replace(/(\d)$/,'.$1')).join(' '));
})