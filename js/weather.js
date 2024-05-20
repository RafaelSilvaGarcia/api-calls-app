import axios from "axios";
import { getGeolocation } from "./geolocation";

const OPEN_METEO_API_URL = 'https://api.open-meteo.com/v1/forecast';

export async function loadWeather() {
    const temperatureElement = document.getElementById('temperature');
    const weatherDescriptionElement = document.getElementById('weather-description');
    const weatherIconElement = document.getElementById('weather-icon');

    const location = await getGeolocation();
    const weather = await getWeather(location.latitude, location.longitude);

    console.log(weather);
    temperatureElement.innerHTML = `<b>Temperatura:</b> ${weather.current.temperature_2m.toFixed(1)}${weather.current_units.temperature_2m}`;
}


export async function getWeather(latitude, longitude ) {
    var url = OPEN_METEO_API_URL + `?latitude=${latitude}&longitude=${longitude}`
    url += "&current=temperature_2m,weather_code&forecast_days=1"
    console.log("url", url);
    const weatherData = await axios.get(url);
    console.log("weatherData", weatherData);
    return weatherData.data;
}
