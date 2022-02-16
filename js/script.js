/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */ 

const selectMenu = document.getElementById('difficulty');
//console.log(selectMenu);

const playBtn = document.getElementById('play-cta');
//console.log(playBtn);

const campoMinatoWrap = document.querySelector('.campo-minato-wrap');
//console.log(campoMinatoWrap);

const punteggio = document.querySelector('.punteggio-wrap');
console.log(punteggio);

let score = 0;
// funzione per generazione livello

function generaLivello(numBlocchi, numColonne, bombaMin, BombaMax) {
    
    const bombeLivello = generaBombe(bombaMin, BombaMax);
    console.log(bombeLivello)
    
    for (let i = 1; i <= numBlocchi; i++) {
        
        const blocco = i;
        //console.log(i);
        
        const square = document.createElement('div');
        //console.log(square);
        
        square.innerHTML = blocco;
        //console.log(square.innerHTML);
        
        square.classList.add('square');
        
        square.style.width = ('calc(100% / ' + numColonne);
        
        campoMinatoWrap.append(square);

        // evento click colonna per gestire bck color
        
        square.addEventListener('click', function() {


            if (bombeLivello.includes(parseInt(square.innerHTML))){
                
                this.classList.add('red');
                
            } else {

                this.classList.add('blue');

                score++;

                punteggio.innerHTML = score;

            }
                

        })
        
    }
    
}

// formula per otternere numeri random

function bombaRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

// generare 16 bombe casuali nel range del livello 

function generaBombe(range1, range2) {

    const bombe = [];
    //console.log(bombe);
    
    do {
    
        const numeriBombe = bombaRandom(range1, range2);
        //console.log(numeriBombe);
    
        if (bombe.includes(numeriBombe) === false) {
    
            bombe.push(numeriBombe);
        }
    
    } while (bombe.length < 16);

    return bombe;

}

// funzione per resettare la griglia

const reset = () => campoMinatoWrap.innerHTML = '';

// evento bottone per generare livello

playBtn.addEventListener('click', function() {
    //console.log('click');

    reset();
        
    const difficulty = selectMenu.value;
    //console.log(difficulty);
    
    switch(difficulty) {
        
        case '0':
            generaLivello(100, 10, 1, 100);
            console.log(difficulty);
            break;
        case '1':
            generaLivello(81, 9, 1, 81);
            console.log(difficulty);
            break;
        case '2':
            generaLivello(49, 7, 1, 49);
            console.log(difficulty);
        break;       
    } 
            
})
