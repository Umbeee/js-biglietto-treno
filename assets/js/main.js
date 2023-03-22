// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//document.writeln('<p> hello world </p>');
const prezzoAlKm = 0.21;

let numeroKm = prompt('Quanti km deve percorrere il passeggero?')
let eta = prompt('inserire età del passeggero')

let costo = numeroKm * prezzoAlKm;

if(eta > 65){
    costo = costo * 0.6;
    costo = costo.toFixed(2);
    document.writeln(`<p> Il prezzo del suo biglietto sarà di ${costo} euro, prezzo scontato del 40% per via della promo over65</p>`);
}else if(eta < 18){
    costo = costo * 0.8;
    costo = costo.toFixed(2);
    document.writeln(`<p> Il prezzo del suo biglietto sarà di ${costo} euro, prezzo scontato del 20% per via della promo under18</p>`)
}else{
    costo = costo.toFixed(2);
    document.writeln(`<p> Il prezzo del suo biglietto sarà di ${costo} euro</p>`)
}