// Napravi funkciju koja prima 5 parametara i vraća
// niz od tih 5 parametara nasumičnim redosledom.

let niz=prompt('unesi pet parametra razdvojevih zarezom').split(",");
console.log(niz);
let x;
var random;
for(let i=0; i<niz.length; i++){
random=Math.floor((Math.random()*(niz.length-i))+i);
x=niz[i];
niz[i]=niz[random];
niz[random]=x;
}
console.log(niz);













