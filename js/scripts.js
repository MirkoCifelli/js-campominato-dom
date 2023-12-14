// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.







const play = document.querySelector("button")
console.log('play', play, typeof play)

const diff = document.getElementById('difficulty');

const container = document.querySelector('main > .grid-container')
    console.log('container', container, typeof container)

// random rumber
const randomNumbers = [];
for (let i = 0; i < 16; i++) {
    // Genero un numero casuale
    let gino = generateRandomNumber(1, 16);
    console.log(gino);

    // Controllo se questo numero appena generato è già presente nell'array
    let foundInArray = randomNumbers.includes(gino);
    while (foundInArray == true) {
        gino = generateRandomNumber(1, 16);
        console.log(gino);
        foundInArray = randomNumbers.includes(gino);
    }

    randomNumbers.push(gino);
    
    console.log(randomNumbers);
}

console.log(randomNumbers);

/* 
    FUNZIONI
*/
function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}




play.addEventListener('click', function(){
    const cellNumber = parseInt(diff.value);
    
    container.innerHTML= '';

    for (let i = 1; i <= cellNumber; i++){
        const cell = document.createElement('div');
        cell.innerHTML=  i ;
        cell.classList.add('cell');
        cell.classList.add('cell-' + cellNumber);
        cell.addEventListener('click', function(){
            this.classList.add('active');
            console.log(this.innerHTML);
        });
        container.append(cell);
     }
})


