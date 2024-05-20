import { loadNews } from "./news"
import { loadSidebar } from "./sidebar";
import { loadGeolocation } from "./geolocation";
import { loadWeather } from "./weather";

document.addEventListener('DOMContentLoaded', async () => {
    loadSidebar();
    await loadGeolocation();
    await loadWeather();
    await loadNews();
});

