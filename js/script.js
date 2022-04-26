
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
    div.addEventListener('click', function(){
        this.classList.add('bg-blue');
    })


    container.append(div);

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


