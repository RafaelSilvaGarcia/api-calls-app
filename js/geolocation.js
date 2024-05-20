import axios from "axios";

const GEOLOCATION_API_URL = 'https://ipapi.co/json/';

export async function loadGeolocation() {
    const locationElement = document.getElementById('location');
    const location = await getGeolocation();
    locationElement.innerHTML = `<b>Cidade:</b> ${location.city} - ${location.region_code} 
        <br /><b>Latitude:</b> ${location.latitude.toFixed(3)}
        <br /><b>Longitude:</b> ${location.longitude.toFixed(3)}`;
}

let geolocationJsonData = null;
export async function getGeolocation() {
    if (geolocationJsonData === null) {
        geolocationJsonData = await getGeolocationFromAPI();
    }
    return geolocationJsonData;
}


async function getGeolocationFromAPI() {
    const geoLoactionData = await axios.get(GEOLOCATION_API_URL);
    return geoLoactionData.data;
}
