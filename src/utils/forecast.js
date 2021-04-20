const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=17b1b08d68fd31a96a72332bfae4fa5f&query=${latitude},${longitude}&units=f`;
	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.error) {
			callback('Unable to find location.', undefined);
		} else {
			callback(
				undefined,
				`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Humidity is ${body.current.humidity}%.`
			);
		}
	});
};

module.exports = forecast;
