// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.







const play = document.querySelector("button")
console.log('play', play, typeof play)

// const diff = parseInt(document.getElementById('difficulty').value);

const container = document.querySelector('main > .grid-container')
    console.log('container', container, typeof container)


// const punteggio = document.querySelector('score');
// // random rumber
// const randomNumbers = [];
// for (let i = 0; i < 16; i++) {
//     // Genero un numero casuale
//     let red = generateRandomNumber(1, diff);
//     console.log(red);

//     // Controllo se questo numero appena generato è già presente nell'array
//     let foundInArray = randomNumbers.includes(red);
//     while (foundInArray == true) {
//         red = generateRandomNumber(1, diff);
//         console.log(red);
//         foundInArray = randomNumbers.includes(red);
//     }

//     randomNumbers.push(red);
    
//     console.log(randomNumbers);
// }


/* 
    FUNZIONI
*/
function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}
// inizzializzo score vuoto
let score = '';


play.addEventListener('click', function(){
    // const cellNumber = parseInt(diff.value);
    const diff = parseInt(document.getElementById('difficulty').value);


    const punteggio = document.querySelector('score');
// random rumber
    const randomNumbers = [];
    for (let i = 0; i < 16; i++) {
        // Genero un numero casuale
        let red = generateRandomNumber(1, diff);
        console.log(red);

        // Controllo se questo numero appena generato è già presente nell'array
        let foundInArray = randomNumbers.includes(red);
        while (foundInArray == true) {
            red = generateRandomNumber(1, diff);
            console.log(red);
            foundInArray = randomNumbers.includes(red);
        }

        randomNumbers.push(red);
        
        console.log(randomNumbers);
}
    
    container.innerHTML= '';

    for (let i = 1; i <= diff; i++){
        score = 0;
        const cell = document.createElement('div');
        cell.innerHTML=  i ;
        cell.classList.add('cell');
        cell.classList.add('cell-' + diff);

        // Debug
        // if( randomNumbers.includes(i)){
        //     cell.classList.add('active-red');
        // }

        cell.addEventListener('click', function(){
            if( randomNumbers.includes(i)){
            this.classList.add('active-red');
            alert('You loooose' + ' il tuo punteggio e di : ' + score)
            container.innerHTML +='';
            }   
            else{
                // Se ha già la classe active skippa
            this.classList.add('active')
            score++;
            }
            console.log(score,"score", typeof score)
            console.log(this.innerHTML);
            console.log('diff', diff , typeof diff);
            if(score == (diff - randomNumbers.length)){
                alert('hai vinto'+'il tuo punteggio;'+ score);
                
            }
        });
        container.append(cell);
        
     }     
})


