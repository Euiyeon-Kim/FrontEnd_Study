const APIKey = "c68c639b332f20b47c915f9ecb9ca467";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const reqUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    fetch(reqUrl)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            console.log(data);
            weather.innerText = data.weather[0].main;
        });
}

function onGeoErr() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
