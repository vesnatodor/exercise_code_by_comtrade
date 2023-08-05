// window.addEventListener('load', () => {
    // Od niza imena, ispiši listu (prva stavka treba da je najkraće ime, a poslednja najduže).

    // let niz = ['Marijan', 'Nata', 'Anabela' , 'Ana', 'Nikola', 'Marijana', 'Marko'];
    // let najkrace = niz[0], najduze = niz[0];
    // niz.forEach((el) => {
    //     if (najkrace.length > el.length) {
    //         najkrace = el;
    //     }
    //     if (najduze.length < el.length) {
    //         najduze = el;
    //     }
    // });
    // niz.splice(niz.indexOf(najkrace), 1);
    // niz.splice(niz.indexOf(najduze), 1);
    // niz.unshift(najkrace);
    // niz.push(najduze);
    // console.log(niz);


    // Napravi skriptu koja pravi div#glavni kojem se na svake dve sekunde poveća širina i visina (od 15px do 30px).
    // samo da se interval prekine posle 2 minuta (BONUS animacije)


    // let interval = setInterval(() => {
    //     let glavni = document.querySelector('#glavni'),
    //     prethodnaVisina = glavni.style.height.substring(0, glavni.style.height.indexOf('px')),
    //     prethodnaSirina = glavni.style.width.substring(0, glavni.style.width.indexOf('px')),
    //     rand1 = Math.floor(Math.random() * 16) + 15,
    //     rand2 = Math.floor(Math.random() * 16) + 15;
    //     glavni.style.transition = '10s';

    //     glavni.style.width = Number(prethodnaSirina) + rand1 + 'px';
    //     glavni.style.height = Number(prethodnaVisina) + rand2 + 'px';
    // }, 2000);
    // setTimeout(() => {
    //     clearInterval(interval);
    // }, 120000);


    // U html napravi paragraf od jedne reči, svako slovo na svaki sekund treba da ima drugačiju veličinu (od 32 do 59) i boju
    // s tim sto se menja da svako slovo bude ili veliko ili malo
    // let recEl = document.querySelector('#rec');
    // setInterval(() => {
    //     let noveReci = recEl.textContent.split('').map((el) => {
    //         let rand1 = Math.floor(Math.random() * 256),
    //             rand2 = Math.floor(Math.random() * 256),
    //             rand3 = Math.floor(Math.random() * 256),
    //             rand4 = Math.floor(Math.random() * 33) + 27,
    //             rand5 = Math.floor(Math.random() * 2),
    //             uper_lower = ['lowercase', 'uppercase'];
    //         return `<span style='
    //             color:rgb(${rand1},${rand2},${rand3});
    //             font-size:${rand4}px;
    //             text-transform: ${uper_lower[rand5]}'>${el}</span>`;
    //     }).join('');
    //     recEl.innerHTML = noveReci;
    // }, 1000);

    // document.querySelector('#pritisnime').onclick = () => {
    //     console.log('kliknut sam');
    // }

    // document.querySelector('#pritisnime').addEventListener('click', function() {
    //     console.log('kliknut sam');
    // });

    // document.querySelector('#pritisnime').addEventListener('contextmenu', function() {
    //     console.log('stigao je neki event');
    // });

    // console.log('gotov je load');
    // document.querySelector('#inputtest').addEventListener('keyup', (e) => {
    //     if (e.key === 'p') {
    //         console.log('P je pritisnuto');
    //     }
    //     console.log('keyup');
    //     console.log(e);
    // });
    // document.querySelector('#pritisnime').addEventListener('click', function(event) {
    //     console.log('kliknut sam');
    //     console.log(event);
    // });

    // document.querySelector('#pritisnime').addEventListener('mouseup', uradime);
    // console.log('ispod event listenera');
    // document.querySelector('#pritisnime').onclick = uradime;
    // document.querySelector('#pritisnime').onclick = uradime2;

// });
let niz = ['Marijan', 'Nata', 'Anabela' , 'Ana', 'Nikola', 'Marijana', 'Marko'];
console.log(niz);
let najkraci=niz[5];
let najduzi=niz[0];
console.log(niz);

niz.forEach((el)=>{
    if(najkraci.length > el.length){
        najkraci=el;
        console.log(najkraci);
    };
    if (najduzi.length < el.length){

        najduzi=el;
    }
});
niz.splice(niz.indexOf(najduzi),1);
niz.splice(niz.indexOf(najkraci),1);
console.log(najkraci);
niz.unshift(najkraci);

niz.push(najduzi);
console.log(niz);

    // let niz = ['Marijan', 'Nata', 'Anabela' , 'Ana', 'Nikola', 'Marijana', 'Marko'];
    // let najkrace = niz[0], najduze = niz[0];
    // niz.forEach((el) => {
    //     if (najkrace.length > el.length) {
    //         najkrace = el;
    //     }
    //     if (najduze.length < el.length) {
    //         najduze = el;
    //     }
    // });
    // niz.splice(niz.indexOf(najkrace), 1);
    // niz.splice(niz.indexOf(najduze), 1);
    // niz.unshift(najkrace);
    // niz.push(najduze);
    // console.log(niz);
// });



//})
// function uradime() {
//     console.log('uradi me');
// }

// function uradime2() {
//     uradime();
//     console.log('uradi me 2');
// }





// document.querySelector('#element').addEventListener('click', function(e) {
//     console.log(e);
//     // console.log(e.srcElement); //NE KORISTIMO
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// document.querySelector('#blueel').addEventListener('contextmenu', function(e) {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// document.querySelector('#ela').addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('ispisan nakon');
// });


// document.querySelector('#blueel').addEventListener('click', function(e) {
    
//     console.log('kliknuto na PLAVI');
//     console.log(e.target);
//     console.log(e.currentTarget);
// });
// document.querySelector('#prvired').addEventListener('click', function(e) {
//     e.stopPropagation();
//     console.log('kliknuto na CRVENI');
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// document.querySelector('#element').addEventListener('click', (e) => {
//     console.log(this);
//     // console.log('kliknuo div');
// });
// document.querySelector('#chield_element').addEventListener('click', function(e) {
//     console.log(this);
//     // e.stopPropagation();
//     // console.log('kliknuo b');
// });

// Na klik dugmeta, body treba da dobije plavu pozadinu. Ukoliko je plavo, vratiti u belo.
// document.querySelector('#obojibody').addEventListener('click',() => {
//     document.body.style.backgroundColor = document.body.style.backgroundColor === 'blue' ? 'white' : 'blue';
// });

// Na klik dugmeta treba da se paragraf sakrije i otkrije.
// Koristi CSS klasu umesto inline stilova. (npr .sakrivena {display: none} )
// document.querySelector('#sakrij').addEventListener('click', function() {
//     document.querySelector('#paragraf').classList.toggle('sakrivena');
// });

//Na klik div elementa, treba da se obriše iz HTML i da se pojavi dugme.
//Na klik dugmeta treba da se napravi novi div koji ima istu funkcionalnost
// document.querySelector('#obrisihtml').addEventListener('click', function() {
//     document.body.innerHTML = `<button id ="dugme">DUGME</button>`;
//     document.querySelector('#dugme').addEventListener('click', function() {
//         document.body.innerHTML = `<div id="obrisihtml">Klikni me</div>`;
//     });
// });

// Div koji ima 50px pading ima p od par rečenica koji ima b u sredini.
// Na klik diva (npr po padingu) treba da se ispiše u konzoli “ja sam div”,
// na klik paragrafa “ja sam paragraf” i na klik bolda “ja sam bold”.
// Ako se klikne bold, ne treba da se pojavi za paragraf i div,
// ako se klikne paragraf ne treba da se pokaže div i paragraf.
// document.querySelector('#divel').addEventListener('click', () => {
//     console.log('ja sam div');
// });
// document.querySelector('#pel').addEventListener('click', function(e) {
//     e.stopPropagation();
//     console.log('ja sam paragraf');
// });
// document.querySelector('#bel').addEventListener('click', function(e) {
//     e.stopPropagation();
//     console.log('ja sam bold');
// });


// Ako imamo tabelu od 3 reda i 3 kolone, na svaki klik ćelije ta ćelija treba da primi klasu “active”.
// Ta klasa u CSS ima pozadinsku boju crnu i boju teksta belu.
// Svaka ostala ćelija treba da ostane bez aktivne klase, dakle uvek je samo jedna aktivna.
// elementi = document.querySelectorAll('td');
// elementi.forEach(element => {
//     element.addEventListener('click', function() {
//         let imaklasu = this.classList.contains('active');
//         elementi.forEach(el => {
//             el.classList.remove('active');
//         });
//         if (!imaklasu) {
//             this.classList.add('active');
//         }
//     });
// });


// Napravi par linkova u HTML preko js. Nek svaki vodi ka Guglovoj stranici.
// Na klik linka, treba da se ispiše novi h1 element ispod njih koji kaže “Neće ti ona nidje”
// i da ne ode nigde. Dakle, ostaje se na stranici šta god da se klikne. Ako se klikne van linka, h1 se obriše.
// for (let i = 0; i < 10; i++) {
//     let element = document.createElement('a');
//     element.innerHTML = 'LINK';
//     element.href = 'https://www.google.com/';
//     document.body.append(element);
// }
// let a_elementi = document.querySelectorAll('a');
// a_elementi.forEach((el) => {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         if (!document.querySelector('h1')) {
//             let el = document.createElement('h1');
//             el.innerHTML = 'Nece nigde';
//             document.body.append(el);
//         }
//     });
// });
// document.body.addEventListener('click', function() {
//     document.body.removeChild(document.querySelector('h1'));
// });