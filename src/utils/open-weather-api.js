import 'whatwg-fetch';
const rootUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = '3476d124781ef30edcef1dc71833558c';

function buildQueryString(params) {
  var qs = [];
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    }
  }
  return `?${qs.join('&')}`;
}

function getForecast(params) {
  params.appid = apiKey;
  params.units = params.units || 'metric';
  const url = `${rootUrl}forecast${buildQueryString(params)}`;
  return fetch(url)
  .then(res => {
    return res.json();
  })
  .catch(function(ex) {
    console.log('parsing forecast data failed', ex);
  });
}

const OpenWeatherApi = {
  forecast: {
    byCityName: function(cityName, countryCode, units) {
      return getForecast({ q: [cityName, countryCode], units });
    },
    byCityId: function(cityId, units) {
      return getForecast({ id: cityId, units });
    },
    byCoordinats: function(lat, lon, units) {
      return getForecast({ lat, lon, units });
    }
  }
};

export default OpenWeatherApi;
