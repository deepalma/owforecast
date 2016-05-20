import React, { Component } from 'react';
import moment from 'moment';
import OpenWeatherApi from '../utils/open-weather-api';
import DayHours from './day-hours';
import DayNames from './day-names';
import WeatherInfo from './weather-info';

export default class OWForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() { // After the fetch the data is transformed in a convient format.
    OpenWeatherApi.forecast.byCityName('Roma', 'IT').then(fdata => {
      const forecast = {};
      fdata.list.forEach(item => {
        const dt = moment(item.dt_txt);
        const day = dt.format('ddd');
        const hour = dt.format('H');
        // Because we'll always show just 5 days of forecast
        // we can use the name of the week as a key for data structure.
        forecast[day] = forecast[day] || new Array(8).fill(0);
        forecast[day][hour / 3] = item; //The hours are always multiple of 3.
      });
      this.setState({
        city: fdata.city.name,
        forecast: forecast
      });
    });
  }

  render() {
    return (
      <div className="ow-forecast">
        <h1 className="ow-heading">Forecast for {this.state.city}</h1>
        <DayNames names={Object.keys(this.state.forecast)} />
        <DayHours />
        <WeatherInfo forecast={this.state.forecast} />
      </div>
    );
  }
}
