const play = document.querySelector("button")
console.log('play', play, typeof play)

const diff = document.getElementById('difficulty');

const container = document.querySelector('main > .grid-container')
    console.log('container', container, typeof container)

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


