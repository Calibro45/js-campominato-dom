/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */ 

const selectMenu = document.getElementById('difficulty');
console.log(selectMenu);

const playBtn = document.getElementById('play-cta');
console.log(playBtn);

const campoMinatoWrap = document.querySelector('.campo-minato-wrap');
console.log(campoMinatoWrap);

// funzione per generazione livello

function generaLivello(numBlocchi, numColonne) {
    
    for (let i = 1; i <= numBlocchi; i++) {
        
        const blocco = i;
        //console.log(i);
        
        const square = document.createElement('div');
        //console.log(square);
        
        square.innerHTML = blocco;
        
        square.classList.add('square');
        
        square.style.width = ('calc(100% / ' + numColonne);
        
        campoMinatoWrap.append(square);

        // evento click colonna per gestire bck color

        square.addEventListener('click', function() {

            this.classList.add('blue');
        })
        
    }
    
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
            generaLivello(100, 10);
            console.log(difficulty);
            break;
        case '1':
            generaLivello(81, 9);
            console.log(difficulty);
            break;
        case '2':
            generaLivello(49, 7)
            console.log(difficulty);
            break;       
    } 
            
})


// generare 16 bombe casuali nel range del livello 
// formula per otternere numeri random

function bombaRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

const bombe = [];
console.log(bombe);

do {

    const numeriBombe = bombaRandom(1, 100);
    //console.log(numeriBombe);

    if (bombe.includes(numeriBombe) === false) {

        bombe.push(numeriBombe);
    }

} while (bombe.length < 16);









