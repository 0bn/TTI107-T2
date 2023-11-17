const axios = require('axios');
const appid = "6e85b683f2c7c643e43375f98040a469";
const q = "São Caetano do Sul";
const lang = "pt-br";
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${appid}`;

axios
    .get(url)
    .then((res) => {
        return res.data;
    })

    .then((res) => {
        for (let coord of res) {
            console.log(`
            ${'Local: ' + coord.name},
            ${'Latitude: ' + coord.lat},
            ${'Longitude: ' + coord.lon}
            `);

            const lat = coord.lat;
            const lon = coord.lon;
            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&lang=${lang}`;

            axios
                .get(url2)
                .then((res) => {
                    return res.data;
                })
                .then((res) => {
                    console.log(`
                            ${'Sensação térmica: ' + (res.main.feels_like - 273.15).toFixed(2)}\u00B0C
                            ${'Descrição: ' + res.weather[0].description}
                            `);
                })
        }
    })