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
                    <h2>Website: ${data.website}</h
                    2>
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

