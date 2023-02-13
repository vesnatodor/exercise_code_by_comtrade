//Create a page that has a text input and a button. On the click of the button, 
//the data for the entered user ID should be read, which is read from the users.json file. 
//The data is printed in the middle of the page. Also, then the input and button disappear 
//and the back arrow appears. If it is clicked, the data is deleted and we return to the input and the button.
//if we haven't clicked back, another screen should be shown immediately on every page refresh.





// document.addEventListener('DOMContentLoaded', function() {
    let id = sessionStorage.getItem('korisnik');
    if (id) {
        get_user(id);
    }
    document.querySelector('#forma').addEventListener('submit', function(event) {
        event.preventDefault();
        let id = document.querySelector('#dodaj').value;
        if (id) {
            document.querySelector('#dodaj').value = '';
            get_user(id);
        } else {
            alert('Morate uneti neki ID');
        }
    });
    function get_user(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((json) => {
                if (!json.ok) {
                    throw new Error(json.status);
                }
                return json.json();
            })
            .then((data) => {
                sessionStorage.setItem('korisnik', id);
                document.querySelector('.citaj_podatke').classList.add('nevidljiv');
                document.querySelector('.o_korisniku').classList.remove('nevidljiv');
                let divEl = document.createElement('div');
                divEl.id = 'korisnik';
                divEl.innerHTML = `<h1>Ime: ${data.name}</h1>
                    <h2>Mobile phone number: ${data.phone}</h2>
                    <h2>Website: ${data.website}</h2>
                    <h2>Address: ${data.address.street} ${data.address.suite}</h2>
                    <h2>Company: ${data.company.name}</h2>`;
                document.querySelector('.o_korisniku').append(divEl);
                document.querySelector('#back').addEventListener('click', deleting);
                function deleting() {
                    sessionStorage.removeItem('korisnik');
                    document.querySelector('.o_korisniku').removeChild(divEl);
                    document.querySelector('.citaj_podatke').classList.remove('nevidljiv');
                    document.querySelector('.o_korisniku').classList.add('nevidljiv');
                    document.querySelector('#back').removeEventListener('click', deleting);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
// });

// console.log('a' + 4);
// console.log(Number('aaa'));
// && i
// || ili

// function ime() {

// }

// let fja = () => {

// }

// let fja2 = function () {

// }
// function() {

// }

// for (let i = 0; i < 7; i+) {
// }
// let i = 0;
// while(i > 5) {
//     i++;
// }
// do {
//     i++
// } while(i>10)

// function funkcija() {

// }
// let funkcija = 10;

// let niz = [1,2,3,4,5];
// let niz2 = niz.map((el) => {
//     return el * 2;
// });
// let st = niz.join('/');
// niz.forEach((el) => {
//     console.log(el);
// });
// let vr = niz.reduce((pr, cur) => {
//     return pr + cur;
// }, 0);
// let niz3 = niz.filter((el) => {
//     return el > 3;
// });
// niz.sort((a,b) => {
//     return b-a;
// });
// console.log(niz);

// let a = niz.find(el => el > 3);
// let b = niz.filter((el) => el > 3);
// console.log(a);
// console.log(b);

// let niz = [1,2,3];

// niz.forEach(element => {
//     console.log(element);
// });

// let obj = [{ime: 'Marko', plata: 1000}, {ime: 'Marijan', plata: 1100}];
// let varijabla = obj.reduce((prethodni, trenutni) => {
//     return prethodni + trenutni.plata;
// }, 0);
// console.log(varijabla / obj.length);

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });

// let el = document.createElement('div');
// document.body.append(el);

// console.log(document.querySelector('p').innerHTML);
// console.log(document.querySelector('p').textContent);
// console.log(document.querySelector('p').value);

// document.querySelector('img').src = 'images/slika1.png';

// document.querySelector('#father').addEventListener('click', function() {
//     console.log('kliknut father');
// });
// document.querySelector('#son').addEventListener('click', function(event) {
//     event.stopPropagation();
//     console.log('kliknut son');
// });

// async function neka() {
//     await fetch('https://jsonplaceholder.typicode.com/todos')
// }