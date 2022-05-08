// var a = 'kanczyl';

//let zwierzeta =['kot', 'pies', 'kon', 2, 2.523];
//zwierzeta.push(a);
// kawalek= zwierzeta.slice(3);
//console.log( zwierzeta.length );
//console.log (kawalek );

//obiekty
//let osoba = {
//   imie: 'Krystian',
//   nazwisko: 'Nowak',
//   wiek: 22,
//   szkoly: {
//     podstawowa: "w Bojanie",
//     liceum: "XII L.O."
//   }
 //}
//osoba["wiek"] = 35;
//console.log( osoba.szkoly );

// petle
//for (let i = 5; i > 0; i--) {

//console.log( 'czesc' + i) ;

//}

// let osoba1 = {           // imie (funkcja): PIOTR (wartosc)  >>> f(x)
//  imie: "Piotr",
//  nazwisko: "Kott",
//}

//for (x in osoba1) {
//  console.log(osoba[x]);
//}


// let i = 0   // <wartosc
// while (i < 5) { // <warunki pętli
//   console.log('czesc' + i);
//  i++; // <<!dodatkowo dodajemy 1 do i (zamyka petle inaczej powtarzaloby w ////nieskonczonosc)
//}

//let dodaj = (function(x, y) {
//  let mnoznik = 3;
//  let wynik = (x + y) * mnoznik;
//  console.log(x + y);
//})(2,3)

// var a = dodaj(2,3);
//console.log( dodaj(2,3));

//PETLE NA TABLICACH

//let osoby = [
//  {imie:"Zdzich" ,nazwisko:"Kowalski" ,wiek:55},
//  {imie:'Zbych' ,nazwisko:'Nowak' ,wiek:23},
//  {imie:'Zbig' ,nazwisko:'Pomorski' ,wiek:52},

//]
//for (let i = 0; i < osoby.length; i++) {

//  console.log( i, osoby[i].imie );
//}

//osoby.forEach(function(x){
//console.log( x.nazwisko );

//})

//let wynik = osoby.filter(function(osoba){
//  return osoba.wiek > 50;
//})
//console.log( wynik );


//let wynik = osoby.map(function(osoba){
//  return osoba.imie;
//})
//console.log( wynik );

//try {
//  let wynik = osoby.reduced(function(total, osoba){
//    return total + osoba.wiek;
//  }, 0);
//} catch (err){
  //console.log(err)
//}

//try{
//  console.log( wynik );
//} catch (err){
//  console.log( err );
//}

// DOM - document object model

const section document.getElementById('intro');
console.log(section);
