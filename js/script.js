
const btnPlay = document.querySelector('button');
btnPlay.addEventListener('click', play);

function play(){

//al click aggiungere class container
const elemCont = document.querySelector('main > div');
elemCont.classList.add('container');

//selezionare valori dell input
let valInput = document.querySelector('select').value;
console.log(valInput);
//passare arg alla funzione a seconda del valore selezionato
let newArray;


if(valInput === 'facile'){
    newArray = gridGame(100);
} else if (valInput === 'avanzato') {
    newArray = gridGame(81);
} else if (valInput === 'difficile') {
    newArray = gridGame(49)
}

//creare 16 bombe casuali tra 1 e gridGame(num)
const bombX = 16;
const numRndArray = bomb(bombX, newArray.length);
const newElemArray = [];
let numWin = newArray.length - bombX;
console.log(numRndArray);
console.log(numWin);

//creare griglia
//prendere elemento griglia html 
const container = document.querySelector('.container');
container.innerHTML = "";

//creare ciclo for e gli passiamo l'array
for(let i = 0; i < newArray.length; i++){
    const arrayI = newArray[i];
    const div = document.createElement('div');
    div.innerHTML = `<span>${arrayI}</span>`;
    div.classList.add('square');
    container.append(div);

    if(valInput === 'facile'){
        div.classList.add('alt10');
    } else if (valInput === 'avanzato') {
        div.classList.add('alt9');
    } else if (valInput === 'difficile') {
        div.classList.add('alt7');
    }

    //al click di ogni casella aggiungere classe bg-blue
    // div.addEventListener('click', function(){
    //     this.classList.add('bg-blue');
    // })
    div.addEventListener('click', clickCell);


    container.append(div);

}

//funzione che al click delle celle ti dice se ce una bomba o una casella normale
function clickCell(){
    //prendere elemento dentro la casella
    let elementInCell = parseInt(this.querySelector('span').textContent);
    const elemTitle = document.querySelector('h3');

    if(numRndArray.includes(elementInCell) ){
        //se clicco la l elemento bomba aggiugno class bg-red
        this.classList.add('bg-red');
        //al cvlick visualizzare tentativi efettuati e la perdita 
        elemTitle.innerHTML = `Hai perso tentativi effettuati: ${newElemArray.length}`;
    } else{
        //se non clicco la bomba aggiungo bg-blue
        this.classList.add('bg-blue');
        //ogni elemento selezionato lo metto nell array nuovo
        newElemArray.push(elementInCell);
        //levo il click dopo che clicco l elemento
        this.style.pointerEvents = "none";
        //raggiunti i tentativi massimi visualizzare la vincita
        if(newElemArray.length === numWin){
            elemTitle.innerHTML = `Complimenti, hai vinto`;
        }
    }

    console.log(newElemArray);
    
}
}






//FUNCTION
//questa funziona crea un array con tot numeri aggiunti con ciclo
//argument numero che si riferisce a fine ciclo
//return un array con tot numeri
function gridGame(num){
    //creo array vuoto
    const box = [];
    //creo ciclo di numeri da ind=serire nell array
    let i = 1;
    while(box.length < num){
        box.push(i);
        i++;
    }
    return box;
}

//questa funzione crea un array di 16 numeri casuali e diversi tra loro compresi tra 1 e gridGame(num)
function bomb(numBomb, endNum){
    const listBomb = [];

    while(listBomb.length < numBomb){
        let rnd = Math.floor(Math.random() * endNum) + 1;
        
        if(!listBomb.includes(rnd)){
            listBomb.push(rnd);
        }
    }
    return listBomb;
}




