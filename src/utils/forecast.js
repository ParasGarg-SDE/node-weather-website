const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cfecd122c722fa07fcfd0119fdcb8b6a&query=' + latitude + ',' + longitude + '&units=f'

    request( { url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect the weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, {
                weatherDescriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                precipitation: body.current.precip
            })
        }
    })
}

module.exports = forecast