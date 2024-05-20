import axios from "axios";

const NEWS_API_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticias&qtd=18';

export async function loadNews() {
    const newsElement = document.getElementById('news');

    const newsData = await axios.get(NEWS_API_URL);

    const newsItems = newsData.data.items;
    newsElement.innerHTML = '';

    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
                    <a href="${item.link}" target="_blank">
                        <h3>${item.titulo}</h3>
                        <p>${item.introducao}</p>
                    </a>
                `;
        newsElement.appendChild(newsItem);
    });
}