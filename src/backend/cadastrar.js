document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://ec2-34-229-180-95.compute-1.amazonaws.com:3000';

    const productForm = document.getElementById('productForm');
    const resultDiv = document.getElementById('result');

    if (productForm) {
        productForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Coleta os valores dos campos do formulário
            const productName = document.getElementById('product').value;
            const productZipcode = document.getElementById('zipcode').value;
            const productQuantity = document.getElementById('quantity').value;
            const storeName = document.getElementById('store').value;

            // Faz uma requisição POST para a API com os dados do formulário
            fetch(`${apiUrl}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: productName,
                    zipcode: productZipcode,
                    quantity: productQuantity,
                    store: storeName
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
                resultDiv.innerText = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerText = `Error: ${error.message}`;
            });
        });
    }
});