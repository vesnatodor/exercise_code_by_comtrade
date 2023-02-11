//the button calls the post whose id can be entered in the input next to it.
 //If it does not exist, it reports an error to the user.
    document.querySelector('#get_post_btn').addEventListener('click', function() {
        let validity = Math.floor(Number(document.querySelector('#post_input').value));
        if (!validity || validity < 0) {
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${validity}`)
            .then((json) => {
                if (!json.ok) {
                    throw new Error(json.status);
                }
                return json.json();
            })
            .then((data) => {
                document.querySelector('#post_text').innerHTML = data.body;
            })
            .catch((err) => {
                alert('There is no post with the requested id ' + validity);
            });
    });
    
    