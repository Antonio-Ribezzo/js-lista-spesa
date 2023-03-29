/*
    Esercizio:
    Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
    Consigli:
    - Ricorda di inizializzare la variabile di contatore prima dell'inizio del ciclo while
    - Ricorda di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/ 

let listaSpesa = [
    'mele',
    'insalta',
    'patate',
    'cipolla',
    'mozzarella',
    'carote',
    'uova',
    'pane',
    'latte',
    'pasta'
]

console.log(listaSpesa)

let i = 0;

while(i < listaSpesa.length){
    // codice da eseguire
    console.log(listaSpesa[i])
    // istruzioni per terminare il ciclo
    i++;
}