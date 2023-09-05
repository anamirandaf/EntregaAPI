const apiKey = 'ISMMLhB6Ff5f61d9q8Hzk7GYs4MJ5YGw';

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');
const gifsContainer = document.getElementById('gifs-container');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`;

    // Realiza la solicitud GET a la API de GIPHY
    fetch(apiUrl)
        .then((response) => response.json()) // Convierte la respuesta a JSON
        .then((data) => {
            gifsContainer.innerHTML = ""; // Limpia los resultados anteriores
            const gifs = data.data;

            for (const gif of gifs) {
                const gifUrl = gif.images.fixed_height.url;
                const img = document.createElement('img');
                img.src = gifUrl;
                gifsContainer.appendChild(img);
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });
});