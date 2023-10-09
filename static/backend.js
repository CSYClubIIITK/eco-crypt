document.addEventListener('DOMContentLoaded', function () {
    const encrypt = document.getElementById("bt1");
    const decrypt = document.getElementById("bt2");

    encrypt.addEventListener('click', () => {
        const inputText = document.getElementById('text_input').value;
        const url = "https://ecocrypt.vercel.app/encrypt"; // add the vercel url

        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputText),
        };

        fetch(url, requestParams)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status ' + response.status);
                }
            })
            .then(data => {
                console.log('Response from Flask app:', data);
                document.getElementById('outputText').value = data.modified_text;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    decrypt.addEventListener('click', () => {
        const inputText = document.getElementById('text_input').value;
        const url = "https://ecocrypt.vercel.app/decrypt"; // add the vercel url

        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputText),
        };

        fetch(url, requestParams)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status ' + response.status);
                }
            })
            .then(data => {
                console.log('Response from Flask app:', data);
                document.getElementById('outputText').value = data.modified_text;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
