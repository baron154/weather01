const axios = require('axios');

const forecast = (address, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=99416ce4307445e1856141854240905&q=${address}&aqi=no`;

    axios.get(url)
        .then(response => {
            const { current,location } = response.data;
            callback(undefined, 
                     {
                        forca: `${location.name} ${current.condition.text} It is currently ${current.temp_c} degrees out. There is a ${current.precip_mm}% chance of rain.`,
                        location: location.name + ' ' + location.region + ' ' + location.country
                     }
            );
        })
        .catch(error => {
            if (error.response) {
                callback('Unable to find location', undefined);
            } else {
                callback('Unable to connect to weather service!', undefined);
            }
        });
}

module.exports = forecast;
