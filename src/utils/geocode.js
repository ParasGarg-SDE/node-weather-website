const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFzZWo1MDM1MSIsImEiOiJja29sczZoemMwdnJ0MnZvMG0xcmVobGFsIn0.5dss7d6g7KmD0AjS09F5QQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect the location services!', undefined)
        }
        else if (body.features.length == 0) {
            callback('Unable to find location.', undefined)
        }
        else{
            callback(undefined, {
                longitutde: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode